import { StateMachine } from "../stateMachine/StateMachine";

export class Creature {
  private sm: StateMachine;

  public get areEyesOpen(): boolean {
    return this._areEyesOpen;
  }
  public get isChewing(): boolean {
    return this._isChewing;
  }
  public get heartRate(): number {
    return this._heartRate;
  }

  public _areEyesOpen: boolean = false;
  public _isChewing: boolean = false;
  public _heartRate: number = 0;

  constructor() {
    setInterval(this.update, 200);
  }

  private update() {
    this.sm.update();
  }
}
