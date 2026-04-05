import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { GAME_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type { ApiResponse } from '@/shared/types/base-types';
import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import type { getGameScheduleResponse } from '@/shared/types/game-types';
import { handleNotFoundError } from '@/shared/utils/query-error-handler';

export const gameQueries = {
  ALL: () => queryOptions({ queryKey: GAME_KEY.ALL }),

  GAME_LIST: (dateStr: string) =>
    queryOptions<getGameScheduleResponse['gameSchedule']>({
      queryKey: GAME_KEY.SCHEDULE(dateStr),
      queryFn: async () => {
        try {
          const res = await get<getGameScheduleResponse | ApiResponse<getGameScheduleResponse>>(
            END_POINT.GET_GAME_SCHEDULE(dateStr),
          );

          if (
            typeof res === 'object' &&
            res !== null &&
            'status' in res &&
            'message' in res &&
            'data' in res
          ) {
            return res.data?.gameSchedule ?? [];
          }

          return (res as getGameScheduleResponse).gameSchedule ?? [];
        } catch (error) {
          return handleNotFoundError(error, []);
        }
      },
      enabled: !!dateStr,
      placeholderData: keepPreviousData,
    }),
};
