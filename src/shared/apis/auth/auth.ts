import { instance } from '@apis/instance';
import { END_POINT } from '@constants/api';

export const postKakaoLogin = (code: string) => {
  return instance.post(END_POINT.POST_AUTH_LOGIN, { code });
};
