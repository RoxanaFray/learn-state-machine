import { State } from "../stateMachine/State";
import { CreatureData } from "./CreatureData";

export abstract class CreatureState extends State {
  protected creatureData: CreatureData;

  public provideCreatureDataRef(creatureData: CreatureData) {
    this.creatureData = creatureData;
  }
}
