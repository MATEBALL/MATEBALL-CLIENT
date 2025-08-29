import { post } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import { mutationOptions } from '@tanstack/react-query';
import type { responseTypes } from '@/shared/types/base-types';
import type { postAgreementInfoRequest, postUserInfoRequest } from '@/shared/types/user-types';

export const userMutations = {
  USER_INFO: () =>
    mutationOptions<responseTypes, Error, postUserInfoRequest>({
      mutationKey: USER_KEY.INFO(),
      mutationFn: ({ nickname, introduction, birthYear, gender }) =>
        post(END_POINT.USER_INFO, { nickname, introduction, birthYear, gender }),
    }),

  AGREEEMENT_INFO: () =>
    mutationOptions<responseTypes, Error, postAgreementInfoRequest>({
      mutationKey: USER_KEY.AGREEMENT(),
      mutationFn: ({ hasAccepted }) => post(END_POINT.AGREEMENT_INFO, { hasAccepted }),
    }),
};
