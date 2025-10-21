import { DefaultEntity } from "./DefaultEntity.interface";

export interface NanoIdEntity extends DefaultEntity {
  nanoid: string;
}
