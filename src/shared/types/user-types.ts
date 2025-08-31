/**
 * 유저 정보 조회 응답
 * get
 * /v1/users/info
 */
export interface getUserInfoResponse {
  nickname: string | null;
  age: string | null;
  gender: string | null;
  team: string | null;
  style: string | null;
  introduction: string | null;
  imgUrl: string | null;
}

/**
 * 유저 정보 등록 요청
 * post
 * /v1/users/info
 */
export interface postUserInfoRequest {
  gender: string;
  birthYear: number;
}

/**
 * 유저 닉네임 등록 요청
 * post
 * /v1/users/info/nickname
 */
export interface postUserInfoNicknameRequest {
  nickname: string;
}

/**
 * 사용자 정보 수정
 * post
 * /v2/users/info
 */
export interface postEditProfileRequest {
  field: string;
  value: string;
}

/**
 * 매칭 조건 조회
 * get
 * /v2/users/match-condition
 */
export interface getMatchConditionResponse {
  team: string;
  teamAllowed: string | null;
  style: string;
  genderPreference: string;
}

/**
 * 매칭 조건 수정
 * post
 * /v2/users/match-condition
 */
export interface postMatchConditionRequest {
  team: string;
  teamAllowed: string | null;
  style: string;
  genderPreference: string;
}
