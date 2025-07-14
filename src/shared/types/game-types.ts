export interface getGameScheduleResponse {
  gameSchedule: Game[];
}

export interface Game {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
}
