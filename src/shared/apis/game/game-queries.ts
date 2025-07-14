import { get } from '@apis/http';
import { END_POINT } from '@constants/api';
import { GAME_KEY } from '@constants/query-key';
import { queryOptions } from '@tanstack/react-query';
import type { getGameScheduleResponse } from '@/shared/types/game-types';

export const userQueries = {
  ALL: () => queryOptions({ queryKey: GAME_KEY.ALL }),

  GAME_LIST: () =>
    queryOptions<getGameScheduleResponse>({
      queryKey: GAME_KEY.SCHEDULE(),
      queryFn: () => get(END_POINT.GET_GAME_SCHEDULE),
    }),
};
