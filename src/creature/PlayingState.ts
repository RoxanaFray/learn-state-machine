import { CreatureState } from "./CreatureState";
import { Clamp01 } from "./GlobalShit";

export class PlayingState extends CreatureState {
  public enter() {
    super.enter();
    this.creatureData.isPlaying = true;
    this.creatureData.heartRate = 100;
    const newHappiness = this.creatureData.happiness + 0.3;
    this.creatureData.happiness = Clamp01(newHappiness);
  }
  public update() {
    super.update();
  }
  public exit() {
    super.exit();
    this.creatureData.isPlaying = false;
    this.creatureData.heartRate = this.creatureData.defaultHeartRate;
  }
}
