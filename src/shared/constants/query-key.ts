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

  USERS_NUM_COUNT: (matchId: number) => [...MATCH_KEY.ALL, 'usersNumCount', matchId] as const,
  SINGLE_RESULT: (matchId: number) => [...MATCH_KEY.ALL, 'singleResult', matchId] as const,
  SINGLE_LIST: (date: string) => [...MATCH_KEY.ALL, 'singleList', date] as const,
  GROUP_LIST: (date: string) => [...MATCH_KEY.ALL, 'groupList', date] as const,
  GROUP_RESULT: (matchId: number) => [...MATCH_KEY.ALL, 'groupResult', matchId] as const,

  POST_MATCH: () => [...MATCH_KEY.ALL, 'postMatch'] as const,
  POST_MATCH_CONDITION: () => [...MATCH_KEY.ALL, 'postMatchCondition'] as const,

  SINGLE_STATUS: (status: string) => [...MATCH_KEY.ALL, 'singleStatus', status] as const,
  GROUP_STATUS: (status: string) => [...MATCH_KEY.ALL, 'groupStatus', status] as const,

  MATCH_DETAIL: (matchId: number) => [...MATCH_KEY.ALL, 'matchDetail', matchId] as const,
  POST_MATCH_REQUEST: (key?: string) => [...MATCH_KEY.ALL, 'postMatchRequest', key] as const,
  PATCH_MATCH_ACCEPT: (key?: string) => [...MATCH_KEY.ALL, 'patchMatchAccept', key] as const,
  PATCH_MATCH_REJECT: (key?: string) => [...MATCH_KEY.ALL, 'patchMatchReject', key] as const,
  PATCH_MATCH_STAGE: (key?: string) => [...MATCH_KEY.ALL, 'patchMatchStage', key] as const,
} as const;
