import axios, { AxiosError } from 'axios';
import { RESPONSE_MESSAGE } from '../constants/response';
import type { errorResponseTypes } from '../types/api';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// TODO: interceptor 추후 수정 필요
instance.interceptors.response.use(
  (response) => {
    // TODO: 명세서 보고 바꾸기
    // response.data: { status, message, data }
    return response.data.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, message } = error.response.data as errorResponseTypes;
      const displayMessage =
        RESPONSE_MESSAGE[status] || message || '알 수 없는 오류입니다.';
      console.log(displayMessage);
    } else {
      console.log('서버에 연결할 수 없습니다.');
    }

    return Promise.reject(error);
  }
);
