import { NanoIdEntity } from "./NanoIdEntity.interface";
import { Team } from "./Team.interface";
import { Venue } from "./Venue.interface";

interface GameScore {
  totalScore: number;
  firstQuarterScore?: number;
  secondQuarterScore?: number;
  thirdQuarterScore?: number;
  fourthQuarterScore?: number;
}

export interface Game extends NanoIdEntity {
  week: number;
  startsAt: Date;
  attendanceTotal: number;
  isConferenceGame: boolean;

  home: GameScore;
  away: GameScore;

  homeWinProbability?: number;
  awayWinProbability?: number;

  highlightYouTubeUrl?: string;

  homeTeam: Team;
  awayTeam: Team;

  venue: Venue;
}
