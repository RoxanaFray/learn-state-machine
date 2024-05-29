import { Creature } from "./Creature";

const creature: Creature = new Creature();

function Clamp01(val: number): number {
  if (val < 0) return 0;
  if (val > 1) return 1;
  return val;
}

export { creature, Clamp01 };
