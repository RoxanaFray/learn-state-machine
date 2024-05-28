import { CreatureState } from "./CreatureState";

export class RanAwayState extends CreatureState {
  public get name(): string {
    return "Ran away";
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
