import {
  highSpinCompassProWashers,
  NormalSpinCompassWashers,
  gen4000Washers,
  l6000LAC,
} from "./washingStore";
import {
  lagoonDryers,
  l6000Dryers,
  gen4000Dryers,
} from "./dryingStore";
import { ironers } from "./ironersList";

export const allMachines = [
  ...highSpinCompassProWashers,
  ...NormalSpinCompassWashers,
  ...gen4000Washers,
  ...l6000LAC,
  ...lagoonDryers,
  ...l6000Dryers,
  ...gen4000Dryers,
  ...ironers,
];
