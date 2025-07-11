import { post } from '@apis/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import { mutationOptions } from '@tanstack/react-query';

export const userMutations = {
  POST_NICKNAME: () =>
    mutationOptions<void, unknown, { nickname: string }>({
      mutationKey: USER_KEY.NICKNAME(),
      mutationFn: ({ nickname }) => post(END_POINT.POST_INFO_NICKNAME, { nickname }),
    }),
};
