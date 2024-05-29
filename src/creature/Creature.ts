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
    this._isActive = isActive;
  }
  public setOnCurrentStateChangedAction(action: (val: string) => void) {
    this._onCurrentStateChangedAction = action;
  }
  public setOnIsChewingChangedAction(action: (val: boolean) => void) {
    this._onIsChewingChangedAction = action;
    this._onIsChewingChangedAction(this._data.isChewing);
  }
  public setOnAreEyesOpenChangedAction(action: (val: boolean) => void) {
    this._onAreEyesOpenChangedAction = action;
  }
  public setOnFullnessChangedAction(action: (val: number) => void) {
    this._onFullnessChangedAction = action;
    this._onFullnessChangedAction(this._data.fullness);
  }
  public setOnHeartRateChangedAction(action: (val: number) => void) {
    this._onHeartRateChangedAction = action;
    this._onHeartRateChangedAction(this._data.heartRate);
  }

  public giveFood(): void {
    if (this._sm.currentState == this._idleState) {
      this._data.hasRecievedFood = true;
    }
  }

  private _lastFrameTime: number = Date.now();
  private _deltaTime: number = 0;

  private _data: CreatureData;

  // data changed actions
  private _onCurrentStateChangedAction: (val: string) => void;
  private _onIsChewingChangedAction: (val: boolean) => void;
  private _onAreEyesOpenChangedAction: (val: boolean) => void;
  private _onFullnessChangedAction: (val: number) => void;
  private _onHeartRateChangedAction: (val: number) => void;

  // state machine stuff
  private _isActive: boolean;
  private _sm: StateMachine;
  private _idleState: IdleState;
  private _eatingState: EatingState;
  private _sleepingState: SleepingState;
  private _playingState: PlayingState;
  private _ranAwayState: RanAwayState;

  constructor() {
    this._data = new CreatureData();
    this._isActive = false;
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
    if (!this._isActive) return;

    const oldData = JSON.parse(JSON.stringify(this._data)) as CreatureData;
    const oldState = this._sm.currentState;

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

    if (oldState != this._sm.currentState)
      this._onCurrentStateChangedAction(this._sm.currentStateName);
    if (oldData.isChewing != this._data.isChewing)
      this._onIsChewingChangedAction(this._data.isChewing);
    if (oldData.heartRate != this._data.heartRate)
      this._onHeartRateChangedAction(this._data.heartRate);
    if (oldData.fullness != this._data.fullness)
      this._onFullnessChangedAction(this._data.fullness);

    const currentTime = Date.now();
    this._deltaTime = (currentTime - this._lastFrameTime) / 1000;
    this._lastFrameTime = currentTime;
  }
}
