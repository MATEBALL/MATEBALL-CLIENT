import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { MATCH_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type { ApiResponse } from '@/shared/types/base-types';
import type {
  getCreateListResponse,
  getGameMatchListResponse,
  getGroupMatchListResponse,
  getGroupMatchMate,
  getGroupMatchResultResponse,
  getMatchCountResponse,
  getMatchDetailResponse,
  getMatchMembersDetailResponse,
  getMatchMembersResponse,
  getRequestListResponse,
  getSingleMatchListResponse,
  getSingleMatchResultResponse,
  getSingleMatchStatusResponse,
} from '@/shared/types/match-types';
import { handleNotFoundError } from '@/shared/utils/query-error-handler';

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
   * 일대일 매칭 결과 조회
   */
  SINGLE_MATCH_RESULT: (matchId: number) =>
    queryOptions<getSingleMatchResultResponse>({
      queryKey: MATCH_KEY.RESULT.SINGLE(matchId),
      queryFn: () => get(END_POINT.GET_SINGLE_RESULT(matchId)),
    }),

  /**
   * 그룹 매칭 결과 조회
   */
  GROUP_MATCH_RESULT: (matchId: number, enabled = true) =>
    queryOptions<getGroupMatchResultResponse>({
      queryKey: MATCH_KEY.RESULT.GROUP(matchId),
      queryFn: () => get(END_POINT.GET_GROUP_RESULT(matchId)),
      enabled,
    }),

  /**
   * 일대일 매칭 리스트 조회
   */
  SINGLE_MATCH_LIST: (date: string) =>
    queryOptions<getSingleMatchListResponse>({
      queryKey: MATCH_KEY.LIST.SINGLE(date),
      queryFn: async () => {
        try {
          const res = await get<
            getSingleMatchListResponse | ApiResponse<getSingleMatchListResponse>
          >(END_POINT.GET_SINGLE_LIST(date));

          if (
            typeof res === 'object' &&
            res !== null &&
            'status' in res &&
            'message' in res &&
            'data' in res
          ) {
            return res.data ?? { mates: [] };
          }

          return res as getSingleMatchListResponse;
        } catch (error) {
          return handleNotFoundError(error, { mates: [] });
        }
      },
    }),

  /**
   * 그룹 매칭 리스트 조회
   */
  GROUP_MATCH_LIST: (date: string) =>
    queryOptions<getGroupMatchListResponse>({
      queryKey: MATCH_KEY.LIST.GROUP(date),
      queryFn: async () => {
        try {
          const res = await get<getGroupMatchListResponse | ApiResponse<getGroupMatchListResponse>>(
            END_POINT.GET_GROUP_LIST(date),
          );

          if (
            typeof res === 'object' &&
            res !== null &&
            'status' in res &&
            'message' in res &&
            'data' in res
          ) {
            return res.data ?? { mates: [] };
          }

          return res as getGroupMatchListResponse;
        } catch (error) {
          return handleNotFoundError(error, { mates: [] });
        }
      },
    }),

  /**
   * 경기별 매칭 리스트 조회
   */
  GAME_MATCH_LIST: (gameId: number) =>
    queryOptions<getGameMatchListResponse>({
      queryKey: MATCH_KEY.LIST.GAME(gameId),
      queryFn: async () => {
        try {
          const res = await get<getGameMatchListResponse | ApiResponse<getGameMatchListResponse>>(
            END_POINT.GET_MATCH_LIST(gameId),
          );

          if (
            typeof res === 'object' &&
            res !== null &&
            'status' in res &&
            'message' in res &&
            'data' in res
          ) {
            return (
              res.data ?? {
                awayTeam: '',
                homeTeam: '',
                date: '',
                stadium: '',
                result: [],
              }
            );
          }

          return res as getGameMatchListResponse;
        } catch (error) {
          return handleNotFoundError(error, {
            awayTeam: '',
            homeTeam: '',
            date: '',
            stadium: '',
            result: [],
          });
        }
      },
    }),

  /**
   * 일대일 매칭 현황 조회
   */
  SINGLE_MATCH_STATUS: (status: string) =>
    queryOptions<getSingleMatchStatusResponse>({
      queryKey: MATCH_KEY.STATUS.SINGLE(status),
      queryFn: () => get(END_POINT.GET_SINGLE_STATUS(status)),
    }),

  /**
   * 그룹 매칭 현황 조회
   */
  GROUP_MATCH_STATUS: (status: string) =>
    queryOptions<{ mates: getGroupMatchMate[] }>({
      queryKey: MATCH_KEY.STATUS.GROUP(status),
      queryFn: () => get(END_POINT.GET_GROUP_STATUS(status)),
    }),

  /**
   * 매칭 요청 상세 조회
   */
  MATCH_DETAIL: (matchId: number, newRequest?: boolean) =>
    queryOptions<getMatchDetailResponse>({
      queryKey: [MATCH_KEY.DETAIL(matchId), { newRequest }],
      queryFn: () => {
        const url = `${END_POINT.GET_MATCH_DETAIL(matchId)}${typeof newRequest !== 'undefined' ? `?newRequest=${newRequest}` : ''}`;
        return get(url);
      },
    }),

  /**
   * 매칭된 그룹원 리스트 조회
   */
  MATCH_MEMBERS: (matchId: number) =>
    queryOptions<getMatchMembersResponse>({
      queryKey: MATCH_KEY.MEMBERS(matchId),
      queryFn: async () => {
        try {
          const res = await get<getMatchMembersResponse | ApiResponse<getMatchMembersResponse>>(
            END_POINT.GET_MATCH_MEMBERS(matchId),
          );

          if (
            typeof res === 'object' &&
            res !== null &&
            'status' in res &&
            'message' in res &&
            'data' in res
          ) {
            return res.data ?? { leader: '', results: [] };
          }

          return res as getMatchMembersResponse;
        } catch (error) {
          return handleNotFoundError(error, { leader: '', results: [] });
        }
      },
    }),

  /**
   * 매칭된 그룹원 리스트 조회
   */
  MATCH_MEMBERS_DETAIL: (matchId: number) =>
    queryOptions<getMatchMembersDetailResponse>({
      queryKey: MATCH_KEY.MEMBERS(matchId),
      queryFn: () => get(END_POINT.GET_MATCH_MEMBERS_DETAIL(matchId)),
    }),

  /**
   * 오픈채팅방 주소 조회
   */
  OPEN_CHAT_URL: (matchId: number, enabled = true) =>
    queryOptions<{ chattingUrl: string }>({
      queryKey: MATCH_KEY.OPEN_CHAT(matchId),
      queryFn: () => get(END_POINT.GET_OPEN_CHAT_URL(matchId)),
      enabled,
    }),

  /**
   * 생성한 매칭 리스트 조회
   */
  CREATE_LIST: () =>
    queryOptions<getCreateListResponse>({
      queryKey: MATCH_KEY.LIST.CREATE(),
      queryFn: () => get(END_POINT.GET_CREATE_LIST),
    }),

  /**
   * 요청한 매칭 리스트 조회
   */
  REQUEST_LIST: () =>
    queryOptions<getRequestListResponse>({
      queryKey: MATCH_KEY.LIST.REQUEST(),
      queryFn: () => get(END_POINT.GET_REQUEST_LIST),
    }),
};
