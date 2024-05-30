import { CreatureState } from "./CreatureState";
import { Clamp01 } from "./GlobalShit";

export class SleepingState extends CreatureState {
  public get name(): string {
    return "Sleeping";
  }
  public enter() {
    super.enter();
    this.creatureData.areEyesClosed = true;
    this.creatureData.heartRate = 40;
    const newEnergy = this.creatureData.energy + 0.3;
    this.creatureData.energy = Clamp01(newEnergy);
  }
  public update() {
    super.update();
  }
  public exit() {
    super.exit();
    this.creatureData.areEyesClosed = false;
    this.creatureData.heartRate = this.creatureData.defaultHeartRate;
  }
}
