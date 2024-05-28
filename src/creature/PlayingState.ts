import { CreatureState } from "./CreatureState";

export class PlayingState extends CreatureState {
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
