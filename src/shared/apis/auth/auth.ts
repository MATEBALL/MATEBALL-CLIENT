import { get } from '@apis/base/http';
import { instance } from '@apis/base/instance';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type { getUserStatusResponse } from '@/shared/types/auth-types';

export const postKakaoLogin = (code: string) => {
  return instance.post(END_POINT.POST_AUTH_LOGIN, { code });
};

export const authQueries = {
  USER_STATUS: () =>
    queryOptions<getUserStatusResponse>({
      queryKey: USER_KEY.INFO(),
      queryFn: () => get(END_POINT.GET_USER_INFO),
    }),
};
