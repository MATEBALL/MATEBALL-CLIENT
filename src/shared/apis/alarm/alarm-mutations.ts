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
};
