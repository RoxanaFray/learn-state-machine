import { StateMachine } from "../stateMachine/StateMachine";
import { EatingState } from "./EatingState";
import { IdleState } from "./IdleState";
import { PlayingState } from "./PlayingState";
import { RunAwayState } from "./RunAwayState";
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

  private _sm: StateMachine;
  private _idleState: IdleState;
  private _eatingState: EatingState;
  private _sleepingState: SleepingState;
  private _playingState: PlayingState;
  private _runAwayState: RunAwayState;

  private _areEyesOpen: boolean = false;
  private _isChewing: boolean = false;
  private _heartRate: number = 0;

  constructor() {
    this.initializeStateMachine();
    setInterval(this.update, 200);
  }

  private initializeStateMachine() {
    this._sm = new StateMachine();

    this._idleState = new IdleState();
    this._eatingState = new EatingState();
    this._sleepingState = new SleepingState();
    this._playingState = new PlayingState();
    this._runAwayState = new RunAwayState();

    this._sm.setState(this._idleState);
  }

  private update() {
    if (!this._sm) return;
    this._sm.update();
  }
}
