import { post } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import queryClient from '@libs/query-client';
import { mutationOptions } from '@tanstack/react-query';
import type { responseTypes } from '@/shared/types/base-types';

export const alarmMutations = {
  READ_ALARM: () =>
    mutationOptions<responseTypes, Error, number>({
      mutationKey: ['alarms', 'read'],
      mutationFn: (matchId) => post(END_POINT.POST_READ_ALARM(matchId)),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['alarms', 'hasUnread'] });
      },
    }),
};
