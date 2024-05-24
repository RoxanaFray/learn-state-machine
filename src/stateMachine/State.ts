export abstract class State {
  public get name(): string {
    return "";
  }

  public get isRunning(): boolean {
    return this._isRunning;
  }
  public get isDone(): boolean {
    return this._isDone;
  }
  private _isRunning: boolean = false;
  private _isDone: boolean = false;

  public enter() {
    this._isRunning = true;
    this._isDone = false;
  }

  public update() {}

  public exit() {
    this._isRunning = false;
    this._isDone = true;
  }
}
