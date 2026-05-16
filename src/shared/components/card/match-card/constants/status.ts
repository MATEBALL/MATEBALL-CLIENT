export const STATUS_KEYWORDS = {
  MATCHING_COMPLETE: '매칭 완료',
  NEW_REQUEST: '새요청',
  APPROVAL_COMPLETE: '승인 완료',
  FAILED: '실패',
  WAITING: '대기',
} as const;

export const MATCH_STATE = {
  CREATED: '매칭생성',
  RECRUITING: '그룹원 모집 중',
  MATCHING_COMPLETE: '매칭완료',
  REQUESTED: '요청',
  WAITING: '수락 대기 중',
  APPROVAL_COMPLETE: '수락완료',
};

export type StatusKeyword = (typeof STATUS_KEYWORDS)[keyof typeof STATUS_KEYWORDS];
