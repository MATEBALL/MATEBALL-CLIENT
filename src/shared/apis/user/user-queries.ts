import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type { ApiResponse } from '@/shared/types/base-types';
import type {
  getMatchConditionResponse,
  getUserCountResponse,
  getUserInfoResponse,
} from '@/shared/types/user-types';

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
      queryFn: async () => {
        const res = await get<getUserInfoResponse | ApiResponse<getUserInfoResponse>>(
          END_POINT.GET_USER_INFO,
        );

        if (
          typeof res === 'object' &&
          res !== null &&
          'status' in res &&
          'message' in res &&
          'data' in res
        ) {
          if (!res.data) {
            throw new Error('유저 정보 응답 데이터가 없습니다.');
          }

          return res.data;
        }

        return res as getUserInfoResponse;
      },
    }),

  MATCH_CONDITION: () =>
    queryOptions<getMatchConditionResponse>({
      queryKey: USER_KEY.MATCH_CONDITION(),
      queryFn: async () => {
        const res = await get<getMatchConditionResponse | ApiResponse<getMatchConditionResponse>>(
          END_POINT.MATCH_CONDITION,
        );

        if (
          typeof res === 'object' &&
          res !== null &&
          'status' in res &&
          'message' in res &&
          'data' in res
        ) {
          if (!res.data) {
            throw new Error('매칭 조건 응답 데이터가 없습니다.');
          }

          return res.data;
        }

        return res as getMatchConditionResponse;
      },
    }),

  USER_COUNT: () =>
    queryOptions<getUserCountResponse>({
      queryKey: USER_KEY.COUNT(),
      queryFn: async () => {
        const res = await get<getUserCountResponse | ApiResponse<getUserCountResponse>>(
          END_POINT.GET_USER_COUNT,
        );

        if (
          typeof res === 'object' &&
          res !== null &&
          'status' in res &&
          'message' in res &&
          'data' in res
        ) {
          if (!res.data) {
            throw new Error('유저 수 응답 데이터가 없습니다.');
          }

          return res.data;
        }

        return res as getUserCountResponse;
      },
    }),
};
