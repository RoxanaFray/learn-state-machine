import { State } from "../stateMachine/State";

export class EatingState extends State {
  public get name(): string {
    return "Eating";
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
