export abstract class State {
  public get isActive(): boolean {
    return this._isActive;
  }
  public get isDone(): boolean {
    return this._isDone;
  }

  private _isActive: boolean = false;
  private _isDone: boolean = false;

  private _enterTime: number;
  private _durationInSeconds: number;

  public enter() {
    this._isActive = true;
    this._isDone = false;
    this._enterTime = Date.now();
  }

  public update() {
    const currentTime = Date.now();
    if (currentTime - this._enterTime >= this._durationInSeconds * 1000) {
      this._isDone = true;
    }
  }

  public exit() {
    this._isActive = false;
  }

  public setDurationInSeconds(duration: number) {
    this._durationInSeconds = duration;
  }
}
