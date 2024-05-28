import { CreatureState } from "./CreatureState";

export class SleepingState extends CreatureState {
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
