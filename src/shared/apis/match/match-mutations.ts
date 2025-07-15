import { patch, post } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { MATCH_KEY } from '@constants/query-key';
import { mutationOptions } from '@tanstack/react-query';
import type { responseTypes } from '@/shared/types/base-types';
<<<<<<< HEAD
import type { postMatchConditionRequest, postMatchCreateRequest } from '@/shared/types/match-types';
=======
import type {
  postMatchConditionRequest,
  postMatchCreateRequest,
  postMatchCreateResponse,
} from '@/shared/types/match-types';


export const matchMutations = {
  /**
   * 매칭 생성
   */
  CREATE_MATCH: () =>
    mutationOptions<postMatchCreateResponse, Error, postMatchCreateRequest>({
      mutationKey: MATCH_KEY.POST.MATCH(),
      mutationFn: ({ gameId, matchType }) => post(END_POINT.POST_MATCH, { gameId, matchType }),
    }),

  /**
   * 매칭 조건 설정
   */
  MATCH_CONDITION: () =>
    mutationOptions<responseTypes, Error, postMatchConditionRequest>({
      mutationKey: MATCH_KEY.POST.CONDITION(),
      mutationFn: ({ team, teamAllowed, style, genderPreference }) =>
        post<responseTypes>(END_POINT.POST_MATCH_CONDITION, {
          team,
          teamAllowed,
          style,
          genderPreference,
        }),
    }),

  /**
   * 매칭 요청
   */
  MATCH_REQUEST: () =>
    mutationOptions<responseTypes, Error, number>({
      mutationKey: MATCH_KEY.REQUEST.POST(),
      mutationFn: (matchId) => post(END_POINT.POST_MATCH_REQUEST(matchId)),
    }),

  /**
   * 요청 수락
   */
  MATCH_ACCEPT: () =>
    mutationOptions<responseTypes, Error, number>({
      mutationKey: MATCH_KEY.REQUEST.ACCEPT(),
      mutationFn: (matchId) => patch(END_POINT.PATCH_MATCH_ACCEPT(matchId)),
    }),

  /**
   * 요청 거절
   */
  MATCH_REJECT: () =>
    mutationOptions<responseTypes, Error, number>({
      mutationKey: MATCH_KEY.REQUEST.REJECT(),
      mutationFn: (matchId) => patch(END_POINT.PATCH_MATCH_REJECT(matchId)),
    }),

  /**
   * 승인 완료 → 요청 대기중 전환
   */
  MATCH_STAGE: () =>
    mutationOptions<responseTypes, Error, number>({
      mutationKey: MATCH_KEY.PATCH_STAGE(),
      mutationFn: (matchId) => patch(END_POINT.PATCH_MATCH_STAGE(matchId)),
    }),
};
