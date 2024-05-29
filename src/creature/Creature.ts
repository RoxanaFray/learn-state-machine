import { StateMachine } from "../stateMachine/StateMachine";
import { CreatureData } from "./CreatureData";
import { EatingState } from "./EatingState";
import { IdleState } from "./IdleState";
import { PlayingState } from "./PlayingState";
import { RanAwayState } from "./RanAwayState";
import { SleepingState } from "./SleepingState";

export class Creature {
  public get deltaTime() {
    return this._deltaTime;
  }

  public setIsActive(isActive: boolean) {
    if (isActive) this._lastFrameTime = Date.now();
    this._data.isActive = isActive;
  }

  public setOnDataChangedAction(action: (data: CreatureData) => void) {
    this._onDataChangedAction = action;
    this._onDataChangedAction(this._data);
  }

  public giveFood(): void {
    if (this._sm.currentState == this._idleState) {
      this._data.hasRecievedFood = true;
    }
  }

  private _lastFrameTime: number = Date.now();
  private _deltaTime: number = 0;

  private _data: CreatureData;
  private _onDataChangedAction: (data: CreatureData) => void;

  // state machine stuff
  private _sm: StateMachine;
  private _idleState: IdleState;
  private _eatingState: EatingState;
  private _sleepingState: SleepingState;
  private _playingState: PlayingState;
  private _ranAwayState: RanAwayState;

  constructor() {
    this._data = new CreatureData();
    this.initializeStateMachine(() => this.startUpdateCycle());
  }

  private startUpdateCycle() {
    setInterval(() => {
      this.update();
    }, 32);
  }

  private initializeStateMachine(onInitializedAction: () => void) {
    this._sm = new StateMachine();
    this._idleState = new IdleState();
    this._eatingState = new EatingState();
    this._sleepingState = new SleepingState();
    this._playingState = new PlayingState();
    this._ranAwayState = new RanAwayState();
    const allStates = [
      this._idleState,
      this._eatingState,
      this._sleepingState,
      this._playingState,
      this._ranAwayState,
    ];
    allStates.forEach((state) => {
      state.provideCreatureDataRef(this._data);
      state.setDurationInSeconds(3); //todo: it is only temporary here
    });
    onInitializedAction();
  }

  private update() {
    if (!this._data.isActive) return;

    const oldDataSerialized = JSON.stringify(this._data);

    if (
      !this._sm.currentState ||
      (this._sm.currentState.isActive && this._sm.currentState.isDone)
    ) {
      this._sm.setState(this._idleState);
    } else if (
      this._data.hasRecievedFood &&
      this._sm.currentState == this._idleState
    ) {
      this._data.hasRecievedFood = false;
      this._sm.setState(this._eatingState);
    }

    this._sm.update();
    this._data.stateName = this._sm.currentStateName;

    // calculate delta time
    const currentTime = Date.now();
    this._deltaTime = (currentTime - this._lastFrameTime) / 1000;
    this._lastFrameTime = currentTime;

    // call data changed action for view layer
    const currentDataSerialized = JSON.stringify(this._data);
    if (oldDataSerialized != currentDataSerialized) {
      this._onDataChangedAction(this._data);
    }
  }
}
