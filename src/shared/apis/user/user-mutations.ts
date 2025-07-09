import { post } from '@apis/http';
import { END_POINT } from '@constants/api';
import { USER_KEY } from '@constants/query-key';
import { mutationOptions } from '@tanstack/react-query';

export const userMutations = {
  POST_NICKNAME: () =>
<<<<<<< HEAD
    mutationOptions<void, unknown, { nickname: string }>({
      mutationKey: USER_KEY.NICKNAME(),
      mutationFn: ({ nickname }) => post(END_POINT.POST_INFO_NICKNAME, { nickname }),
=======
    mutationOptions({
      mutationKey: USER_KEY.NICKNAME(),
      mutationFn: ({ nickname }: { nickname: string }) =>
        post(END_POINT.POST_INFO_NICKNAME, { nickname }),
>>>>>>> eb06153 (feat: query 패턴 세팅 (#84))
    }),
};
