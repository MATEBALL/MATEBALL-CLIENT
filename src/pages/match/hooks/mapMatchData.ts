import type {
  ChipColor,
  GroupCardProps,
  MatchCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';
import { isChipColor, normalizeChipKey } from '@pages/match/utils/match-status';
import type {
  createList,
  getGroupMatchMate,
  requestList,
  singleMatchMate,
} from '@/shared/types/match-types';

export const mapSingleMatchData = (mates: singleMatchMate[] = []): SingleCardProps[] => {
  return mates.map((mate) => {
    const teamKey = mate.team;
    const styleKey = normalizeChipKey(mate.style);

    const chips = [teamKey, styleKey].filter((key): key is ChipColor => isChipColor(key));

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

export const mapCreateMatchData = (mates: createList[] = []): MatchCardProps[] => {
  return mates.map((mate) => ({
    id: mate.matchId,
    type: 'match',
    nickname: mate.nickname,
    count: mate.count,
    imgUrl: mate.img,
    awayTeam: mate.awayTeam,
    homeTeam: mate.homeTeam,
    stadium: mate.stadium,
    date: mate.date,
    isGroup: mate.isGroup,
    matchTabType: 'created',
    statusLabel: mate.stateLabel,
  }));
};

export const mapRequestMatchData = (mates: requestList[] = []): MatchCardProps[] => {
  return mates.map((mate) => ({
    id: mate.matchId,
    type: 'match',
    nickname: mate.nickname,
    count: mate.count,
    imgUrl: mate.imageUrls,
    awayTeam: mate.awayTeam,
    homeTeam: mate.homeTeam,
    stadium: mate.stadium,
    date: mate.date,
    isGroup: mate.isGroup,
    matchTabType: 'requested',
    statusLabel: mate.stateLabel,
  }));
};
