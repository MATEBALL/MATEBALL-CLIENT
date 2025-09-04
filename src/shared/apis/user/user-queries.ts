import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import { HTTP_STATUS } from '@constants/response';
import { queryOptions } from '@tanstack/react-query';
import axios from 'axios';
import type { getMatchConditionResponse, getUserInfoResponse } from '@/shared/types/user-types';


export const userQueries = {
  ALL: () => queryOptions({ queryKey: USER_KEY.ALL }),

  KAKAO_INFO: () =>
    queryOptions({
      queryKey: USER_KEY.KAKAO(),
      queryFn: () => get(END_POINT.GET_KAKAO_INFO),
    }),

  USER_INFO: () =>
    queryOptions<getUserInfoResponse>({
      queryKey: USER_KEY.INFO(),
      queryFn: () => get(END_POINT.GET_USER_INFO),
    }),

  MATCH_CONDITION: () =>
    queryOptions<getMatchConditionResponse>({
      queryKey: USER_KEY.MATCH_CONDITION(),
      queryFn: () => get<getMatchConditionResponse>(END_POINT.MATCH_CONDITION),
    }),

  NICKNAME_CHECK: (nickname: string) =>
    queryOptions<boolean>({
      queryKey: USER_KEY.NICKNAME_CHECK(nickname),
      enabled: !!nickname && nickname.trim().length > 1,
      queryFn: async () => {
        try {
          await get<void>(END_POINT.GET_NICKNAME_CHECK(nickname));
          return true;
        } catch (e) {
          if (axios.isAxiosError(e) && e.response?.status === HTTP_STATUS.CONFLICT) {
            return false;
          }
          throw e;
        }
      },
      retry: (failureCount, error) => {
        if (axios.isAxiosError(error) && error.response?.status === HTTP_STATUS.CONFLICT)
          return false;
        return failureCount < 2;
      },
    }),
};
