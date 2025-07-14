/**
 * 카카오 로그인 시 인증 정보를 포함한 응답
 */
export interface getAuthLoginResponse {
  userId: number;
  gender: string;
  birthyear: string;
}

/**
 * 사용자 상태 정보 반환
 */

export interface getUserStatusResponse {
  nickname: boolean;
  condition: boolean;
}
