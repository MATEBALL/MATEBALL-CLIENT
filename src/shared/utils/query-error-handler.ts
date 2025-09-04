import { HTTP_STATUS } from '@constants/response';
import type { AxiosError } from 'axios';

export const handleNotFoundError = <T>(error: unknown, emptyData: T): T => {
  if ((error as AxiosError)?.response?.status === HTTP_STATUS.NOT_FOUND) {
    return emptyData;
  }
  throw error;
};

export const handleBadRequestError = <T>(error: unknown, emptyData: T): T => {
  if ((error as AxiosError)?.response?.status === HTTP_STATUS.BAD_REQUEST) {
    return emptyData;
  }
  throw error;
};

export const handleNotFoundOrBadRequestError = <T>(error: unknown, emptyData: T): T => {
  const status = (error as AxiosError)?.response?.status;
  if (status === HTTP_STATUS.NOT_FOUND || status === HTTP_STATUS.BAD_REQUEST) {
    return emptyData;
  }
  throw error;
};
