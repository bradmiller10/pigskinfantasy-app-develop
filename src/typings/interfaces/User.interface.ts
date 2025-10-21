import { UserRole, UserStatus } from "../enums";
import { DefaultEntity } from "./DefaultEntity.interface";

export interface User extends DefaultEntity {
  name: {
    first: string;
    last: string;
    middle?: string;
  };

  phoneNumber: string;

  role: UserRole;

  leagues: string[];
}
