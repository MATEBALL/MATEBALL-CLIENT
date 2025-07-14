import { post } from '@apis/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import { mutationOptions } from '@tanstack/react-query';
import type { responseTypes } from '@/shared/types/base-types';
import type { postUserInfoNicknameRequest, postUserInfoRequest } from '@/shared/types/user-types';

export const userMutations = {
  POST_NICKNAME: () =>
    mutationOptions<responseTypes, Error, postUserInfoNicknameRequest>({
      mutationKey: USER_KEY.NICKNAME(),
      mutationFn: ({ nickname }) => post(END_POINT.POST_INFO_NICKNAME, { nickname }),
    }),

  POST_USERINFO: () =>
    mutationOptions<responseTypes, Error, postUserInfoRequest>({
      mutationKey: USER_KEY.INFO(),
      mutationFn: ({ gender, birthYear }) => post(END_POINT.USER_INFO, { gender, birthYear }),
    }),
};
