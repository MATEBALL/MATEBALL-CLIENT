import { get, post } from '@apis/http';
import { END_POINT } from '@constants/api';
import { queryOptions } from '@tanstack/react-query';

export const userQueries = {
  ALL: ['user'] as const,
  kakaoInfo: () =>
    queryOptions({
      queryKey: [...userQueries.ALL, 'kakao'],
      queryFn: () => get(END_POINT.GET_KAKAO_INFO),
    }),
  userInfo: () =>
    queryOptions({
      queryKey: [...userQueries.ALL, 'info'],
      queryFn: () => get(END_POINT.GET_USERS_INFO),
    }),
  postNickName: (nickname: string) =>
    queryOptions({
      queryKey: [...userQueries.ALL, 'nickname'],
      queryFn: () => post(END_POINT.POST_INFO_NICKNAME, { nickname }),
      enabled: Boolean(nickname),
    }),
};
