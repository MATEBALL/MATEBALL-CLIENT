import { get } from '@apis/http';
import { END_POINT } from '@constants/api';

export const getKakaoLogin = (code: string) => get(`${END_POINT.GET_AUTH_LOGIN}${code}`);
