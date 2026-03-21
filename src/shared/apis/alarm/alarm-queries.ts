import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { ALARM_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type { getUnreadAlarmsResponse } from '@/shared/types/alarm-types';

export const alarmQueries = {
  HAS_UNREAD: () =>
    queryOptions<boolean>({
      queryKey: ALARM_KEY.HAS_UNREAD,
      queryFn: async () => {
        const res = await get<getUnreadAlarmsResponse>(END_POINT.GET_UNREAD_ALARMS);
        return res.hasUnreadAlarms;
      },
    }),
};
