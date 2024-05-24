import { State } from "../stateMachine/State";

export class SleepingState extends State {
  public get name(): string {
    return "Sleeping";
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
