import { CreatureState } from "./CreatureState";

export class EatingState extends CreatureState {
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
