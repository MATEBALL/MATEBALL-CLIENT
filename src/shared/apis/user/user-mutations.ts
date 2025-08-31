import { post, put } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import queryClient from '@libs/query-client';
import { mutationOptions } from '@tanstack/react-query';
import type { responseTypes } from '@/shared/types/base-types';
import type {
  postEditProfileRequest,
  postUserInfoNicknameRequest,
  postUserInfoRequest,
} from '@/shared/types/user-types';

export const userMutations = {
  NICKNAME: () =>
    mutationOptions<responseTypes, Error, postUserInfoNicknameRequest>({
      mutationKey: USER_KEY.NICKNAME(),
      mutationFn: ({ nickname }) => post(END_POINT.POST_INFO_NICKNAME, { nickname }),
    }),

  USER_INFO: () =>
    mutationOptions<responseTypes, Error, postUserInfoRequest>({
      mutationKey: USER_KEY.INFO(),
      mutationFn: ({ gender, birthYear }) => post(END_POINT.USER_INFO, { gender, birthYear }),
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
      },
      onError: (err) => {
        console.error('수정에 실패했어요', err);
      },
    }),
};
