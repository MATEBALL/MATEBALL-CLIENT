import { post } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { ALARM_KEY } from '@constants/query-key';
import queryClient from '@libs/query-client';
import { mutationOptions } from '@tanstack/react-query';

export const alarmMutations = {
  READ_ALL_ALARMS: () =>
    mutationOptions<Error, void>({
      mutationKey: ALARM_KEY.READ_ALL(),
      mutationFn: () => post(END_POINT.POST_READ_ALL_ALARMS),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ALARM_KEY.HAS_UNREAD });
      },
    }),
};
