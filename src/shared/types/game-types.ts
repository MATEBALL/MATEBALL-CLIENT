/**
 * 경기 일정 목록 조회 응답
 */
export interface getGameScheduleResponse {
  gameSchedule: Game[];
}


/**
 * 단일 경기 정보
 */
export interface Game {
  id: number;
  awayTeam: string;
  homeTeam: string;
  gameTime: string;
  stadium: string;
}
