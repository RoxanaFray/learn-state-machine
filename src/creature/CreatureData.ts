class CreatureData {
  // settings
  public readonly defaultHeartRate = 60;
  public readonly fullnessDecreaseRatePerSec = 0.1;
  public readonly energyDecreaseRatePerSec = 0.02;
  public readonly happinessDecreaseRatePerSec = 0.05;

  // data
  public stateName: string = "";
  public isActive: boolean = false;
  public hasRecievedFood: boolean = false;
  public isSentToBed: boolean = false;
  public areEyesClosed: boolean = false;
  public isChewing: boolean = false;
  public fullness: number = 0.5;
  public isPlaying: boolean = false;
  public happiness: number = 0.5;
  public heartRate: number = 60;
  public energy: number = 0.5;
}

export { CreatureData };
