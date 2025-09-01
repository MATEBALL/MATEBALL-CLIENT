import type {
  ChipColor,
  GroupCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';
import { chipVariantOptions } from '@components/chip/styles/chip-variants';
import type { getGroupMatchMate, singleMatchMate } from '@/shared/types/match-types';

const normalizeChipKey = (v?: string) => (v ?? '').replace(/\s/g, '');

const isChipColor = (k: string): k is ChipColor =>
  Object.prototype.hasOwnProperty.call(chipVariantOptions.bgColor, k);

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
