import type { ChipColor } from '@components/card/match-card/types/card';
import type { MateItem } from '@pages/match/components/mate-carousel';
import type { matchDetailMateSimple } from '@/shared/types/match-types';

export const mapMateData = (mate: matchDetailMateSimple): MateItem => ({
  ...mate,
  type: 'detailed',
  imgUrl: [mate.imgUrl],
  chips: [mate.team, mate.style].filter((chip): chip is ChipColor => Boolean(chip)),
});
