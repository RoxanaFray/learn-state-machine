import { StateMachine } from "../stateMachine/StateMachine";
import { EatingState } from "./EatingState";
import { IdleState } from "./IdleState";
import { PlayingState } from "./PlayingState";
import { RanAwayState } from "./RanAwayState";
import { SleepingState } from "./SleepingState";

export class Creature {
  public get areEyesOpen(): boolean {
    return this._areEyesOpen;
  }
  public get isChewing(): boolean {
    return this._isChewing;
  }
  public get heartRate(): number {
    return this._heartRate;
  }
  public get currentStateName(): string {
    return this._sm.currentStateName;
  }
  public giveFood(): void {
    if (this._sm.currentState == this._idleState) {
      this._hasRecievedFood = true;
    }
  }

  private _hasRecievedFood: boolean;
  private _sm: StateMachine;
  private _idleState: IdleState;
  private _eatingState: EatingState;
  private _sleepingState: SleepingState;

  private _playingState: PlayingState;
  private _ranAwayState: RanAwayState;

  private _areEyesOpen: boolean = false;
  private _isChewing: boolean = false;
  private _heartRate: number = 0;

  constructor() {
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
    this._eatingState.setDurationInSeconds(3);
    this._sleepingState = new SleepingState();
    this._playingState = new PlayingState();
    this._ranAwayState = new RanAwayState();
    this._sm.setState(this._idleState);

    onInitializedAction();
  }

  private update() {
    this._sm.update();
    console.log("current state: ", this.currentStateName);

    if (this._sm.currentState.isActive && this._sm.currentState.isDone) {
      this._sm.setState(this._idleState);
      return;
    }

    if (this._hasRecievedFood && this._sm.currentState == this._idleState) {
      this._hasRecievedFood = false;
      this._sm.setState(this._eatingState);
      return;
    }

    // other conditions...
  }
}
