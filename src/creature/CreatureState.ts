import { State } from "../stateMachine/State";
import { Creature } from "./Creature";

export abstract class CreatureState extends State {
  protected creature: Creature;

  public provideCreature(creature: Creature) {
    this.creature = creature;
  }
}
