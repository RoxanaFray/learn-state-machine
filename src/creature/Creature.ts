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
    }, 200);
  }

  private initializeStateMachine(onInitializedAction: () => void) {
    this._sm = new StateMachine();
    this._idleState = new IdleState();
    this._eatingState = new EatingState();
    this._sleepingState = new SleepingState();
    this._playingState = new PlayingState();
    this._ranAwayState = new RanAwayState();

    this._sm.setState(this._idleState);

    onInitializedAction();
  }

  private update() {
    this._sm.update();
    console.log("current state: ", this.currentStateName);
  }
}
