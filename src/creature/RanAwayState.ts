import { CreatureState } from "./CreatureState";

export class RanAwayState extends CreatureState {
  public static get stateName() {
    return "RanAwayState"; // todo: try to find better way to do this
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
