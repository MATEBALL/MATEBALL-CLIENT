// user domain
export const USER_KEY = {
  ALL: ['user'] as const,

  KAKAO: () => [...USER_KEY.ALL, 'kakao'] as const,
  AGREEMENT: () => [...USER_KEY.ALL, 'agreement'] as const,
  INFO: () => [...USER_KEY.ALL, 'info'] as const,
  NICKNAME: () => [...USER_KEY.ALL, 'nickname'] as const,
  LOGOUT: () => [...USER_KEY.ALL, 'logout'] as const,
  EDIT_PROFILE: () => [...USER_KEY.ALL, 'edit'] as const,
  MATCH_CONDITION: () => [...USER_KEY.ALL, 'match_condition'] as const,
} as const;

export const AUTH_KEY = {
  ALL: ['auth'] as const,
  AUTH: () => [...AUTH_KEY.ALL, 'status'] as const,
};

// game domain
export const GAME_KEY = {
  ALL: ['game'],
  SCHEDULE: (dateStr: string) => ['game', 'schedule', dateStr],
};

// match domain
export const MATCH_KEY = {
  ALL: ['match'] as const,

  LIST: {
    SINGLE: (date: string) => [...MATCH_KEY.ALL, 'list', 'single', date] as const,
    GROUP: (date: string) => [...MATCH_KEY.ALL, 'list', 'group', date] as const,
  },

  RESULT: {
    SINGLE: (matchId: number) => [...MATCH_KEY.ALL, 'result', 'single', matchId] as const,
    GROUP: (matchId: number) => [...MATCH_KEY.ALL, 'result', 'group', matchId] as const,
  },

  STATUS: {
    SINGLE: (status: string) => [...MATCH_KEY.ALL, 'status', 'single', status] as const,
    GROUP: (status: string) => [...MATCH_KEY.ALL, 'status', 'group', status] as const,
  },

  POST: {
    MATCH: () => [...MATCH_KEY.ALL, 'post', 'match'] as const,
    CONDITION: () => [...MATCH_KEY.ALL, 'post', 'condition'] as const,
  },

  REQUEST: {
    POST: (key?: string) => [...MATCH_KEY.ALL, 'request', 'post', key] as const,
    ACCEPT: (key?: string) => [...MATCH_KEY.ALL, 'request', 'accept', key] as const,
    REJECT: (key?: string) => [...MATCH_KEY.ALL, 'request', 'reject', key] as const,
  },

  DETAIL: (matchId: number) => [...MATCH_KEY.ALL, 'detail', matchId] as const,
  USERS_NUM_COUNT: (matchId: number) => [...MATCH_KEY.ALL, 'usersNumCount', matchId] as const,
  PATCH_STAGE: (key?: string) => [...MATCH_KEY.ALL, 'patch', 'stage', key] as const,
} as const;
