import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { queryOptions } from '@tanstack/react-query';

interface GetUnreadAlarmsResponse {
  status: number;
  message: string;
  hasUnreadAlarms: boolean;
}

export const alarmQueries = {
  HAS_UNREAD: () =>
    queryOptions<boolean>({
      queryKey: ['alarms', 'hasUnread'],
      queryFn: async () => {
        const res = await get<GetUnreadAlarmsResponse>(END_POINT.GET_UNREAD_ALARMS);
        return res.hasUnreadAlarms;
      },
    }),
};
