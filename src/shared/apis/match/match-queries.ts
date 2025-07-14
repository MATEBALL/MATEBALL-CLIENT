import { get } from '@apis/http';
import { END_POINT } from '@constants/api';
import { MATCH_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type {
  getGroupMatchListResponse,
  getGroupMatchMate,
  getGroupMatchResultResponse,
  getMatchCountResponse,
  getMatchDetailResponse,
  getSingleMatchListResponse,
  getSingleMatchMate,
  getSingleMatchResultResponse,
} from '@/shared/types/match-types';

export const matchQueries = {
  ALL: () => queryOptions({ queryKey: MATCH_KEY.ALL }),

  /**
   * 매칭된 인원 조회
   */
  COUNTED_MEMBER: (matchId: number) =>
    queryOptions<getMatchCountResponse>({
      queryKey: MATCH_KEY.USERS_NUM_COUNT(matchId),
      queryFn: () => get(END_POINT.GET_USERS_NUM_COUNT(matchId)),
    }),

  /**
   *  일대일 매칭 생성 결과 조회
   */
  SINGLE_MATCH_RESULT: (matchId: number) =>
    queryOptions<getSingleMatchResultResponse>({
      queryKey: MATCH_KEY.SINGLE_RESULT(matchId),
      queryFn: () => get(END_POINT.GET_SINGLE_RESULT(matchId)),
    }),

  /**
   *  일대일 매칭 리스트 조회
   */
  SINGLE_MATCH_LIST: (date: string) =>
    queryOptions<getSingleMatchListResponse>({
      queryKey: MATCH_KEY.SINGLE_LIST(date),
      queryFn: () => get(`${END_POINT.GET_SINGLE_LIST}${date}`),
    }),

  /**
   * 그룹 매칭 리스트 조회
   */
  GROUP_MATCH_LIST: (date: string) =>
    queryOptions<getGroupMatchListResponse>({
      queryKey: MATCH_KEY.GROUP_LIST(date),
      queryFn: () => get(`${END_POINT.GET_GROUP_LIST}${date}`),
    }),

  /**
   * 그룹 매칭 생성 결과 조회
   */
  GROUP_MATCH_RESULT: (matchId: number) =>
    queryOptions<getGroupMatchResultResponse>({
      queryKey: MATCH_KEY.GROUP_RESULT(matchId),
      queryFn: () => get(END_POINT.GET_GROUP_RESULT(matchId)),
    }),

  /**
   * 일대일 매칭 현황 조회
   */
  SINGLE_MATCH_STATUS: (status: string) =>
    queryOptions<getSingleMatchMate>({
      queryKey: MATCH_KEY.SINGLE_STATUS(status),
      queryFn: () => get(`${END_POINT.GET_SINGLE_STATUS}${status}`),
    }),

  /**
   * 그룹 매칭 현황 조회
   */
  GROUP_MATCH_STATUS: (status: string) =>
    queryOptions<getGroupMatchMate>({
      queryKey: MATCH_KEY.GROUP_STATUS(status),
      queryFn: () => get(`${END_POINT.GET_GROUP_STATUS}${status}`),
    }),

  /**
   * 매칭 요청 상세 조회
   */
  MATCH_DETAIL: (matchId: number) =>
    queryOptions<getMatchDetailResponse>({
      queryKey: MATCH_KEY.MATCH_DETAIL(matchId),
      queryFn: () => get(END_POINT.GET_MATCH_DETAIL(matchId)),
    }),
};
