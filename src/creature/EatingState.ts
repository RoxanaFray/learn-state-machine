import { CreatureState } from "./CreatureState";

export class EatingState extends CreatureState {
  public get name(): string {
    return "Eating";
  }

  public enter() {
    super.enter();
    this.creatureData.isChewing = true;
    this.creatureData.heartRate = 80;
    let newFullness = this.creatureData.fullness + 0.3;
    if (newFullness > 1) newFullness = 1;
    this.creatureData.fullness = newFullness;
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
