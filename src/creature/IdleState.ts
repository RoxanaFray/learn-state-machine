import { State } from "../stateMachine/State";

export class IdleState extends State {
  public get name(): string {
    return "Idle";
  }

  public enter() {
    super.enter();
  }
  public update() {
    super.update();
  }
  public exit() {
    super.exit();
  }
}
