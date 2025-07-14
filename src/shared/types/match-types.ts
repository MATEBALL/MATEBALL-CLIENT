//
// ─── 공통 MATE 타입 ──────────────────────────────────────────────
//

/**
 * 공통 Mate 필드 (ID, 닉네임, 팀, 경기장 정보)
 */
export interface baseMate {
  id: number;
  nickname: string;
  awayTeam: string;
  homeTeam: string;
  stadium: string;
  date: string; // YYYY-MM-DD
}

/**
 * 매칭률이 포함된 Mate
 * @extends baseMate
 */
export interface matchRateMate extends baseMate {
  matchRate: number;
}

/**
 * 1:1 매칭 리스트에 사용되는 Mate
 * @extends matchRateMate
 */
export interface singleMatchMate extends matchRateMate {
  /** 나이 (예: "26세") */
  age: string;
  /** 응원 팀 */
  team: string;
  /** 응원 스타일 */
  style: string;
  /** 프로필 이미지 (단일 URL) */
  imgUrl: string;
}

/**
 * 1:1 매칭 상세 결과 Mate
 * @extends singleMatchMate
 */
export interface singleMatchResult extends singleMatchMate {
  /** 성별 */
  gender: string;
}

/**
 * 그룹 매칭 리스트용 Mate
 * @extends matchRateMate
 */
export interface groupMatchMate extends matchRateMate {
  /** 현재 인원 수 */
  count: number;
  /** 이미지 배열 */
  imgUrl: string[];
}

/**
 * 1:1 매칭 현황에 사용되는 Mate
 * @extends baseMate
 */
export interface directMatchMate extends baseMate {
  age: string;
  gender: string;
  team: string;
  style: string;
  /** 매칭 상태 (ex. 승인대기중, 요청대기중 등) */
  status: string;
  imgUrl: string;
}

/**
 * 매칭 상세 보기용 Mate
 * @extends baseMate
 */
export interface matchDetailMate extends baseMate {
  age: string;
  gender: string;
  introduction: string;
  status: string;
  count: number;
  imgUrl: string[];
  matchRate: number;
}

//
// ─── 요청 및 응답 타입 ─────────────────────────────────────────
//

/**
 * 매칭된 인원 조회 응답
 * get
 * /v1/users/num-count/{matchId}
 */
export interface getMatchCountResponse {
  count: number;
}

/**
 * 1:1 매칭 결과 응답
 * get
 * /v1/users/direct/{matchId}
 */
export interface getSingleMatchResultResponse extends singleMatchResult {}

/**
 * 1:1 매칭 리스트 조회 응답
 * get
 * /v1/users/direct?data=
 */
export interface getSingleMatchListResponse {
  mates: singleMatchMate[];
}

/**
 * 그룹 매칭 리스트 조회 응답
 * get
 * /v1/users/group?data=
 */
export interface getGroupMatchListResponse {
  mates: groupMatchMate[];
}

/**
 * 그룹 매칭 상세 결과 응답
 * get
 * /v1/users/group/{matchId}
 */
export interface getGroupMatchResultResponse {
  id: number;
  nickname: string;
  awayTeam: string;
  homeTeam: string;
  date: string;
  count: number;
  imgUrl: string[];
}

/**
 * 매칭 생성 요청
 * post
 * /v1/users/match
 */
export interface postMatchCreateRequest {
  gameId: number;
  matchType: string;
}

/**
 * 매칭 생성 응답
 * post
 * /v1/users/match
 */
export interface postMatchCreateResponse {
  matchId: number;
}

/**
 * 매칭 조건 설정 요청
 * post
 * /v1/users/match-condition
 */
export interface postMatchConditionRequest {
  team: string;
  teamAllowed: string;
  style: string;
  genderPreference: string;
}

/**
 * 1:1 매칭 현황 리스트 조회 응답
 * get
 * /v1/users/match-stage/direct?
 */
export interface getDirectMatchListResponse {
  mates: directMatchMate[];
}

/**
 * 그룹 매칭 현황 조회
 * get
 * /v1/users/match-stage/group?
 */
export interface getGroupMatchMate {
  id: number;
  nickname: string;
  awayTeam: string;
  homeTeam: string;
  stadium: string;
  date: string;
  status: string;
  count: number;
  imgUrl: string[];
}

/**
 * 매칭 요청 상세조회용 Mate
 * get
 * /v1/users/match-detail/{matchId}
 */
export interface matchDetailMateSimple extends baseMate {
  age: string;
  gender: string;
  team: string;
  style: string;
  introduction: string;
  imgUrl: string;
  matchRate: number;
}

/**
 * 매칭 요청 상세조회 응답
 * get
 * /v1/users/match-detail/{matchId}
 */
export interface getMatchDetailResponse {
  mates: matchDetailMateSimple[];
}
