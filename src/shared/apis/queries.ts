import { get } from '@apis/http';
import { END_POINT } from '@constants/api';
import { queryOptions } from '@tanstack/react-query';

// 유저 도메인 관련 쿼리
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
};

// 게임 관련

// 매칭 관련
