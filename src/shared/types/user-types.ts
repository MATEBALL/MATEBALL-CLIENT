import type { ApiResponse } from './base-types';

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

export interface postUserInfoResponse {
  userId: number;
}

export type UserInfoResponse = ApiResponse<postUserInfoResponse>;

/**
 * 사용자 약관동의
 * post
 * /v2/users/consent
 */
export interface postAgreementInfoRequest {
  hasAccepted: boolean;
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
