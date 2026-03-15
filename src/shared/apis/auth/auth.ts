import { get } from '@apis/base/http';
import { instance } from '@apis/base/instance';
import { END_POINT } from '@constants/api';
import { AUTH_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type { getUserStatusResponse } from '@/shared/types/auth-types';
import type { ApiResponse } from '@/shared/types/base-types';

export const postKakaoLogin = (code: string) => {
  return instance.post(END_POINT.POST_AUTH_LOGIN, { code });
};

export const getUserStatus = async (): Promise<getUserStatusResponse> => {
  const response = await get<ApiResponse<getUserStatusResponse> | getUserStatusResponse>(
    END_POINT.GET_USER_STATUS,
  );

  if (
    typeof response === 'object' &&
    response !== null &&
    'status' in response &&
    'message' in response
  ) {
    return response.data ?? { nickname: false, condition: false };
  }

  return response;
};

export const authQueries = {
  USER_STATUS: () =>
    queryOptions<getUserStatusResponse>({
      queryKey: AUTH_KEY.AUTH(),
      queryFn: getUserStatus,
    }),
};
