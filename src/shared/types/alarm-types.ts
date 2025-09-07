/**
 * 읽지 않은 알람 여부 조회 응답
 * GET /v1/alarms/unread
 */
export interface getUnreadAlarmsResponse {
  status: number;
  message: string;
  hasUnreadAlarms: boolean;
}

/**
 * 알림 읽음 처리 응답
 * POST /v1/alarms/{matchId}/read
 */
export interface postReadAlarmResponse {
  status: number;
  message: string;
}
