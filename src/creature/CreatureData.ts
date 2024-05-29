class CreatureData {
  // settings
  public readonly defaultHeartRate = 60;
  public readonly fullnessDecreaseRatePerSec = 0.01;
  public readonly energyDecreaseRatePerSec = 0.01;

  // data
  public stateName: string = "";
  public isActive: boolean = false;
  public hasRecievedFood: boolean = false;
  public isSentToBed: boolean = false;
  public areEyesOpen: boolean = false;
  public isChewing: boolean = false;
  public fullness: number = 0.5;
  public heartRate: number = 60;
  public energy: number = 0.5;
  public boredom: number = 0;
}

export { CreatureData };
