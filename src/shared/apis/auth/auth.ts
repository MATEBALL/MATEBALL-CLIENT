import { post } from '@apis/http';
import { END_POINT } from '@constants/api';

export const postKakaoLogin = (code: string) => post(END_POINT.GET_AUTH_LOGIN, { code });
