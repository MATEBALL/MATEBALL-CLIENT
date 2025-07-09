import { get } from '@apis/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';

// 유저 도메인 관련 쿼리

export const userQueries = {
  ALL: () => queryOptions({ queryKey: USER_KEY.ALL }),

  KAKAO_INFO: () =>
    queryOptions({
      queryKey: USER_KEY.KAKAO(),
      queryFn: () => get(END_POINT.GET_KAKAO_INFO),
    }),

  USER_INFO: () =>
    queryOptions({
      queryKey: USER_KEY.INFO(),
      queryFn: () => get(END_POINT.GET_USERS_INFO),
    }),
};
