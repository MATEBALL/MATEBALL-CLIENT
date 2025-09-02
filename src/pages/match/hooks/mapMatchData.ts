import type { GroupCardProps, SingleCardProps } from '@components/card/match-card/types/card';
import type { getGroupMatchMate, singleMatchMate } from '@/shared/types/match-types';
import { isChipColor, normalizeChipKey } from '../utils/match-status';

export const mapSingleMatchData = (mates: singleMatchMate[] = []): SingleCardProps[] => {
  return mates.map((mate) => {
    const teamKey = mate.team;
    const styleKey = normalizeChipKey(mate.style);

    const chips = [teamKey, styleKey].filter(isChipColor);

    return {
      ...mate,
      type: 'single',
      imgUrl: [mate.imgUrl],
      isCreated: Boolean(mate.isCreated),
      chips,
    };
  });
};

export const mapGroupMatchData = (mates: getGroupMatchMate[] = []): GroupCardProps[] => {
  return mates.map((mate) => ({
    ...mate,
    type: 'group',
    isCreated: Boolean(mate.isCreated),
  }));
};
