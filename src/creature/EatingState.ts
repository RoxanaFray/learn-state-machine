import { CreatureState } from "./CreatureState";
import { Clamp01 } from "./GlobalShit";

export class EatingState extends CreatureState {
  public enter() {
    super.enter();
    this.creatureData.isChewing = true;
    this.creatureData.heartRate = 80;
    const newFullness = this.creatureData.fullness + 0.3;
    this.creatureData.fullness = Clamp01(newFullness);
  }
  public update() {
    super.update();
  }
  public exit() {
    super.exit();
    this.creatureData.isChewing = false;
    this.creatureData.heartRate = this.creatureData.defaultHeartRate;
  }
}
