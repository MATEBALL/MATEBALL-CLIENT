import { patch, post, put } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import queryClient from '@libs/query-client';
import { router } from '@routes/router';
import { ROUTES } from '@routes/routes-config';
import { mutationOptions } from '@tanstack/react-query';
import type { responseTypes } from '@/shared/types/base-types';
import type {
  postAgreementInfoRequest,
  postEditProfileRequest,
  postMatchConditionRequest,
  postUserInfoRequest,
  UserInfoResponse,
} from '@/shared/types/user-types';

export const userMutations = {
  USER_INFO: () =>
    mutationOptions<UserInfoResponse, Error, postUserInfoRequest>({
      mutationKey: USER_KEY.INFO(),
      mutationFn: ({ nickname, introduction, birthYear, gender }) =>
        post(END_POINT.USER_INFO, { nickname, introduction, birthYear, gender }),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: USER_KEY.ALL });
        router.navigate(ROUTES.HOME, { replace: true });
      },
      onError: (err) => {
        console.error(err);
      },
    }),

  LOGOUT: () =>
    mutationOptions<responseTypes, Error, void>({
      mutationKey: USER_KEY.LOGOUT(),
      mutationFn: () => post(END_POINT.POST_AUTH_LOGOUT),
      onSuccess: async () => {
        await queryClient.cancelQueries({ queryKey: USER_KEY.ALL });

        queryClient.removeQueries({ queryKey: USER_KEY.ALL });
      },
      onError: (err) => {
        console.error('로그아웃 실패', err);
      },
    }),

  EDIT_PROFILE: () =>
    mutationOptions<responseTypes, Error, postEditProfileRequest>({
      mutationKey: USER_KEY.EDIT_PROFILE(),
      mutationFn: ({ field, value }) => put(END_POINT.POST_EDIT_PROFILE, { field, value }),
      onSuccess: async () => {
        queryClient.invalidateQueries({ queryKey: USER_KEY.ALL });
        window.location.reload();
      },
      onError: (err) => {
        console.error('수정에 실패했어요', err);
      },
    }),

  EDIT_MATCH_CONDITION: () =>
    mutationOptions<postMatchConditionRequest, Error, postMatchConditionRequest>({
      mutationKey: USER_KEY.MATCH_CONDITION(),
      mutationFn: ({ team, teamAllowed, style, genderPreference }) =>
        patch(END_POINT.MATCH_CONDITION, { team, teamAllowed, style, genderPreference }),
    }),

  AGREEMENT_INFO: () =>
    mutationOptions<responseTypes, Error, postAgreementInfoRequest>({
      mutationKey: USER_KEY.AGREEMENT(),
      mutationFn: ({ hasAccepted }) => post(END_POINT.AGREEMENT_INFO, { hasAccepted }),
    }),
};
