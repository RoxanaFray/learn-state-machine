import { State } from "./State";

export class StateMachine {
  public get currentState(): State {
    return this._currentState;
  }

  private _currentState: State;

  public setState(state: State) {
    if (this._currentState) {
      this._currentState.exit();
    }
    this._currentState = state;
    this._currentState.enter();
  }

  public update() {
    if (this._currentState) {
      this._currentState.update();
    }
  }
}
