export interface getUserInfoResponse {
  nickname: string | null;
  age: string | null;
  gender: string | null;
  team: string | null;
  style: string | null;
  introduction: string | null;
  imgUrl: string | null;
}

export interface postUserInfoRequest {
  gender: string;
  birthYear: number;
}

export interface postUserInfoNicknameRequest {
  nickname: string;
}
