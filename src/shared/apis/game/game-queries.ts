import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { GAME_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type { getGameScheduleResponse } from '@/shared/types/game-types';

export const gameQueries = {
  ALL: () => queryOptions({ queryKey: GAME_KEY.ALL }),

  GAME_LIST: (dateStr: string) =>
    queryOptions<getGameScheduleResponse['gameSchedule']>({
      queryKey: GAME_KEY.SCHEDULE(dateStr),
      queryFn: async () => {
        const res = await get<getGameScheduleResponse>(
          END_POINT.GET_GAME_SCHEDULE(dateStr),
        );
        return res.gameSchedule ?? [];
      },
    }),
};
