import { Location } from "./Location.interface";
import { NanoIdEntity } from "./NanoIdEntity.interface";

export interface Venue extends NanoIdEntity {
  name: string;
  isGrass: boolean;
  hasADome: boolean;
  location: Location;
  yearBuilt: number;
}
