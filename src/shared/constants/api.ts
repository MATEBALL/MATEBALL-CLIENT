export const BASE_URL = import.meta.env.VITE_API_URL;

export const END_POINT = {
  // 로그인
  POST_AUTH_LOGIN: '/auth/login?code=',
  GET_USER_STATUS: '/v1/users/info-check',

  // 유저 관련
  GET_KAKAO_INFO: '/v1/users/kakao/info',
  USER_INFO: '/v1/users/info',
  POST_INFO_NICKNAME: '/v1/users/info/nickname',

  // 경기 관련
  GET_GAME_SCHEDULE: (date: string) => `/v1/users/game/schedule?date=${date}`,


  // 매칭
  GET_USERS_NUM_COUNT: (matchId: number | string) => `/v1/users/num-count/${matchId}`,
  GET_SINGLE_RESULT: (matchId: number | string) => `/v1/users/direct/${matchId}`,
  GET_SINGLE_LIST: (date: string) => `/v1/users/direct?date=${date}`,
  GET_GROUP_LIST: (date: string) => `/v1/users/group?date=${date}`,
  GET_GROUP_RESULT: (matchId: number | string) => `/v1/users/group/${matchId}`,

  POST_MATCH: '/v1/users/match',
  POST_MATCH_CONDITION: '/v1/users/match-condition',

  GET_SINGLE_STATUS: (status: string) => `/v1/users/match-stage/direct?status=${status}`,
  GET_GROUP_STATUS: (status: string) => `/v1/users/match-stage/group?status=${status}`,

  GET_MATCH_DETAIL: (matchId: number | string) => `/v1/users/match-detail/${matchId}`,
  POST_MATCH_REQUEST: (matchId: number | string) => `/v1/users/match-request/${matchId}`,
  PATCH_MATCH_ACCEPT: (matchId: number | string) => `/v1/users/match-accept/${matchId}`,
  PATCH_MATCH_REJECT: (matchId: number | string) => `/v1/users/match-reject/${matchId}`,
  PATCH_MATCH_STAGE: (matchId: number | string) => `/v1/users/match-stage/${matchId}`,
};
