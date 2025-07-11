export const BASE_URL = import.meta.env.VITE_API_URL;

export const END_POINT = {
  // 로그인
  POST_AUTH_LOGIN: '/auth/login?code=',

  // 유저 관련
  GET_KAKAO_INFO: '/v1/users/kakao/info',
  GET_USERS_INFO: '/v1/users/info',
  POST_INFO_NICKNAME: '/v1/users/info/nickname',

  // 경기 관련
  GET_GAME_SCHEDULE: '/v1/users/game/schedule',

  // 매칭
  GET_USERS_NUM_COUNT: '/v1/users/num-count/{matchId}',
  GET_DIRECT_RESULT: '/v1/users/direct/{matchId}',
  GET_DIRECT_LIST: '/v1/users/direct?date=',
  GET_GROUP_LIST: '/v1/users/group?date=',
  GET_GROUP_RESULT: '/v1/users/group/{matchId}',

  POST_MATCH: '/v1/users/match',
  POST_MATCH_CONDITION: '/v1/users/match-condition',

  GET_DIRECT_STATUS: '/v1/users/match-stage/direct?status=',
  GET_GROUP_STATUS: '/v1/users/match-stage/group?status=',

  GET_MATCH_DETAIL: '/v1/users/match-detail/{matchId}',
  POST_MATCH_REQUEST: '/v1/users/match-request/{matchId}',
  PATCH_MATCH_ACCEPT: '/v1/users/match-accept/{matchId}',
  PATCH_MATCH_REJECT: '/v1/users/match-reject/{matchId}',
};
