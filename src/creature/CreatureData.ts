export class CreatureData {
  // settings
  public readonly defaultHeartRate = 60;
  public readonly fullnessDecreaseRatePerSec = 0.1;

  // data
  public hasRecievedFood: boolean = false;
  public areEyesOpen: boolean = false;
  public isChewing: boolean = false;
  public fullness: number = 0.5;
  public heartRate: number = 60;
}
