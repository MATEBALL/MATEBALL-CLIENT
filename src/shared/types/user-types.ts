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
 * 사용자 정보 설정
 * post
 * /v2/users/info
 */
export interface postUserInfoRequest {
  nickname: string;
  introduction: string;
  birthYear: number;
  gender: string;
}

/**
 * 사용자 약관동의
 * post
 * /v2/users/consent
 */
export interface postAgreementInfoRequest {
  hasAccepted: boolean;
}
