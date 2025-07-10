import { BASE_URL } from '@constants/api';
<<<<<<< HEAD
<<<<<<< HEAD
import { ROUTES } from '@routes/routes-config';
=======
>>>>>>> eb06153 (feat: query 패턴 세팅 (#84))
=======
import { ROUTES } from '@routes/routes-config';
>>>>>>> 6a3c3a6 (feat: 로그인 페이지 뷰 구현 및 카카오 로그인 api 연결 (#71))
import type { AxiosError } from 'axios';
import axios from 'axios';
import { HTTP_STATUS, RESPONSE_MESSAGE } from '../constants/response';
import type { errorResponseTypes } from '../types/api';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error: AxiosError) => {
    const statusCode = error.response?.status;

    if (statusCode === HTTP_STATUS.UNAUTHORIZED) {
      window.location.replace(ROUTES.SIGNUP);
    }

    if (error.response) {
      const { status, message } = error.response.data as errorResponseTypes;
      const displayMessage = RESPONSE_MESSAGE[status] || message || '알 수 없는 오류입니다.';
      console.log(displayMessage);
    } else {
      console.log('서버에 연결할 수 없습니다.');
    }

    return Promise.reject(error);
  },
);
