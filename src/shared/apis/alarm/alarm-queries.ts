import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { ALARM_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type { getUnreadAlarmsResponse } from '@/shared/types/alarm-types';
import type { ApiResponse } from '@/shared/types/base-types';
import { handleNotFoundError } from '@/shared/utils/query-error-handler';

export const alarmQueries = {
  HAS_UNREAD: () =>
    queryOptions<boolean>({
      queryKey: ALARM_KEY.HAS_UNREAD,
      queryFn: async () => {
        try {
          const res = await get<
            | getUnreadAlarmsResponse
            | ApiResponse<{ hasUnreadAlarms?: boolean } | boolean>
            | { hasUnreadAlarms?: boolean }
          >(END_POINT.GET_UNREAD_ALARMS);

          if (
            typeof res === 'object' &&
            res !== null &&
            'status' in res &&
            'message' in res &&
            'data' in res
          ) {
            const payload = res.data;
            if (typeof payload === 'boolean') return payload;
            if (typeof payload === 'object' && payload !== null && 'hasUnreadAlarms' in payload) {
              return Boolean(payload.hasUnreadAlarms);
            }
            return false;
          }

          if (typeof res === 'boolean') return res;
          if (typeof res === 'object' && res !== null && 'hasUnreadAlarms' in res) {
            return Boolean(res.hasUnreadAlarms);
          }

          return false;
        } catch (error) {
          return handleNotFoundError(error, false);
        }
      },
    }),
};
