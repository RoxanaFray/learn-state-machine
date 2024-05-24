import { State } from "./State";

export class StateMachine {
  private currentState: State;

  public setState(state: State) {
    if (this.currentState) {
      this.currentState.exit();
    }
    this.currentState = state;
    this.currentState.enter();
  }

  public update() {
    if (this.currentState) {
      this.currentState.update();
    }
  }
}
