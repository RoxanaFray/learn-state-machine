import { State } from "../stateMachine/State";

export class PlayingState extends State {
  public get name(): string {
    return "Playing";
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
