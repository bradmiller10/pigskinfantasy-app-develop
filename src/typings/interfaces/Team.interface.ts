import { NanoIdEntity } from "./NanoIdEntity.interface";
import { Venue } from "./Venue.interface";

export interface Team extends NanoIdEntity {
  name: string;
  abbreviation: string;
  color: string;
  conference: string;
  logo: string;
  division?: string;
  altColor?: string;
  mascot?: string;
  altName?: string;
  stadium: Venue;
}
