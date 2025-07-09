// user domain
export const USER_KEY = {
  ALL: ['user'] as const,

  KAKAO: () => [...USER_KEY.ALL, 'kakao'] as const,
  INFO: () => [...USER_KEY.ALL, 'info'] as const,
  NICKNAME: () => [...USER_KEY.ALL, 'nickname'] as const,
} as const;

// game domain
export const GAME_KEY = {
  ALL: ['game'] as const,

  SCHEDULE: () => [...GAME_KEY.ALL, 'schedule'] as const,
} as const;

// match domain
export const MATCH_KEY = {
  ALL: ['match'] as const,

  USERS_NUM_COUNT: () => [...MATCH_KEY.ALL, 'usersNumCount'] as const,
  DIRECT_RESULT: () => [...MATCH_KEY.ALL, 'directResult'] as const,
  DIRECT_LIST: () => [...MATCH_KEY.ALL, 'directList'] as const,
  GROUP_LIST: () => [...MATCH_KEY.ALL, 'groupList'] as const,
  GROUP_RESULT: () => [...MATCH_KEY.ALL, 'groupResult'] as const,

  POST_MATCH: () => [...MATCH_KEY.ALL, 'postMatch'] as const,
  POST_MATCH_CONDITION: () => [...MATCH_KEY.ALL, 'postMatchCondition'] as const,

  DIRECT_STATUS: () => [...MATCH_KEY.ALL, 'directStatus'] as const,
  GROUP_STATUS: () => [...MATCH_KEY.ALL, 'groupStatus'] as const,

  MATCH_DETAIL: () => [...MATCH_KEY.ALL, 'matchDetail'] as const,
  POST_MATCH_REQUEST: () => [...MATCH_KEY.ALL, 'postMatchRequest'] as const,
  PATCH_MATCH_ACCEPT: () => [...MATCH_KEY.ALL, 'patchMatchAccept'] as const,
  PATCH_MATCH_REJECT: () => [...MATCH_KEY.ALL, 'patchMatchReject'] as const,
} as const;
