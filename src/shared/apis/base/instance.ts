import { BASE_URL } from '@constants/api';
import { HTTP_STATUS, RESPONSE_MESSAGE } from '@constants/response';
import { ROUTES } from '@routes/routes-config';
import type { AxiosError } from 'axios';
import axios from 'axios';
import type { responseTypes } from '@/shared/types/base-types';

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
      const { status, message } = error.response.data as responseTypes;
      const displayMessage = RESPONSE_MESSAGE[status] || message || '알 수 없는 오류입니다.';
      console.log(displayMessage);
    } else {
      console.log('서버에 연결할 수 없습니다.');
    }

    return Promise.reject(error);
  },
);
