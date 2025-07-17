import type { ChipColor } from '@components/card/match-card/types/card';
import type { singleMatchMate } from '@/shared/types/match-types';

export const mapMateData = (mate: singleMatchMate) => ({
  ...mate,
  type: 'detailed',
  imgUrl: [mate.imgUrl],
  chips: [mate.team, mate.style].filter((chip): chip is ChipColor => Boolean(chip)),
});
