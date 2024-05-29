import { CreatureState } from "./CreatureState";
import { creature } from "./GlobalVariables";

export class IdleState extends CreatureState {
  public get name(): string {
    return "Idle";
  }

  public enter() {
    super.enter();
  }
  public update() {
    super.update();
    let newFullness =
      this.creatureData.fullness -
      this.creatureData.fullnessDecreaseRatePerSec * creature.deltaTime;
    if (newFullness < 0) {
      newFullness = 0;
    }
    this.creatureData.fullness = newFullness;
  }
  public exit() {
    super.exit();
  }
}
