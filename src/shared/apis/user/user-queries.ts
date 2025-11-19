import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
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
};
