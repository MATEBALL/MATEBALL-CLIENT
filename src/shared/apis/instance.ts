import { BASE_URL } from '@constants/api';
<<<<<<< HEAD
import { ROUTES } from '@routes/routes-config';
=======
>>>>>>> eb06153 (feat: query 패턴 세팅 (#84))
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
    return response.data;
  },
  (error: AxiosError) => {
    const statusCode = error.response?.status;

    if (statusCode === HTTP_STATUS.UNAUTHORIZED) {
      window.location.replace(ROUTES.LOGIN);
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
