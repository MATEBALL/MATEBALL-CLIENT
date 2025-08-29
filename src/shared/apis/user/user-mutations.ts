import { post } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import queryClient from '@libs/query-client';
import { router } from '@routes/router';
import { ROUTES } from '@routes/routes-config';
import { mutationOptions } from '@tanstack/react-query';
import type { responseTypes } from '@/shared/types/base-types';
import type { postAgreementInfoRequest, postUserInfoRequest } from '@/shared/types/user-types';

export const userMutations = {
  USER_INFO: () =>
    mutationOptions<responseTypes, Error, postUserInfoRequest>({
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

  AGREEEMENT_INFO: () =>
    mutationOptions<responseTypes, Error, postAgreementInfoRequest>({
      mutationKey: USER_KEY.AGREEMENT(),
      mutationFn: ({ hasAccepted }) => post(END_POINT.AGREEMENT_INFO, { hasAccepted }),
    }),
};
