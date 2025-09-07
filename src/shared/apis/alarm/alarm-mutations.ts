import { post } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { ALARM_KEY } from '@constants/query-key';
import queryClient from '@libs/query-client';
import { mutationOptions } from '@tanstack/react-query';
import type { postReadAlarmResponse } from '@/shared/types/alarm-types';

export const alarmMutations = {
  READ_ALARM: () =>
    mutationOptions<postReadAlarmResponse, Error, number>({
      mutationKey: ALARM_KEY.READ(),
      mutationFn: (matchId) => post(END_POINT.POST_READ_ALARM(matchId)),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ALARM_KEY.HAS_UNREAD });
      },
    }),

  READ_ALL_ALARMS: () =>
    mutationOptions<Error, void>({
      mutationKey: ALARM_KEY.READ_ALL(),
      mutationFn: () => post(END_POINT.POST_READ_ALL_ALARMS),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ALARM_KEY.HAS_UNREAD });
      },
    }),
};
