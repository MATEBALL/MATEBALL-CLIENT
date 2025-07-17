import type { ChipColor } from '@components/card/match-card/types/card';

export const mapMateData = (mate: any) => ({
  ...mate,
  type: 'detailed',
  imgUrl: [mate.imgUrl],
  chips: [mate.team, mate.style].filter((chip): chip is ChipColor => Boolean(chip)),
});
