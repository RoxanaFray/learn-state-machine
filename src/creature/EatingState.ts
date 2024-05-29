import { CreatureState } from "./CreatureState";

export class EatingState extends CreatureState {
  public get name(): string {
    return "Eating";
  }

  public enter() {
    super.enter();
    this.creatureData.isChewing = true;
    this.creatureData.heartRate = 80;
    this.creatureData.fullness = 1;
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
