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
