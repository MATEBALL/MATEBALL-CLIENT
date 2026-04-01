import type { MatchCardProps } from '@components/card/match-card/types/card';
import { getIsButtonEnabled } from '@components/card/match-card/utils/get-is-button-enabled';
import type { createList, requestList } from '@/shared/types/match-types';

const baseMatchCard = (
  mate: {
    matchId: number;
    nickname: string;
    count: number;
    isGroup: boolean;
    awayTeam: string;
    homeTeam: string;
    stadium: string;
    date: string;
    stateLabel: string;
    update: string | null;
  },
  matchTabType: 'created' | 'requested',
) => ({
  id: mate.matchId,
  type: 'match' as const,
  nickname: mate.nickname,
  count: mate.count,
  awayTeam: mate.awayTeam,
  homeTeam: mate.homeTeam,
  stadium: mate.stadium,
  date: mate.date,
  isGroup: mate.isGroup,
  matchTabType,
  statusLabel: mate.stateLabel,
  isButtonEnabled: getIsButtonEnabled(matchTabType, mate.stateLabel),
  hasUpdate: mate.update !== null,
});

export const mapCreateMatchData = (mates: createList[] = []): MatchCardProps[] => {
  return mates.map((mate) => ({
    ...baseMatchCard(mate, 'created'),
    imgUrl: mate.img,
  }));
};

export const mapRequestMatchData = (mates: requestList[] = []): MatchCardProps[] => {
  return mates.map((mate) => ({
    ...baseMatchCard(mate, 'requested'),
    imgUrl: mate.imageUrls,
  }));
};
