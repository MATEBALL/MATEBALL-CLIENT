import type {
  ChipColor,
  GroupCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';
import type { getGroupMatchMate, singleMatchMate } from '@/shared/types/match-types';

export const mapSingleMatchData = (mates: singleMatchMate[] = []): SingleCardProps[] => {
  return mates.map((mate) => ({
    ...mate,
    type: 'single',
    imgUrl: [mate.imgUrl],
    isCreated: Boolean(mate.isCreated),
    chips: [mate.team, mate.style].map((v) => v as ChipColor),
  }));
};

export const mapGroupMatchData = (mates: getGroupMatchMate[] = []): GroupCardProps[] => {
  return mates.map((mate) => ({
    ...mate,
    type: 'group',
    isCreated: Boolean(mate.isCreated),
  }));
};
