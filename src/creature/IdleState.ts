import { CreatureState } from "./CreatureState";
import { creature } from "./GlobalShit";

export class IdleState extends CreatureState {
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
