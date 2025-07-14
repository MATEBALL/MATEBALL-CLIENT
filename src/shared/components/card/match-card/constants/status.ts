export const STATUS_KEYWORDS = {
  MATCHING_COMPLETE: '매칭 완료',
  NEW_REQUEST: '새 요청',
  APPROVAL_COMPLETE: '승인 완료',
  FAILED: '실패',
  WAITING: '대기',
} as const;

export type StatusKeyword = (typeof STATUS_KEYWORDS)[keyof typeof STATUS_KEYWORDS];
