import type { MatchCardProps } from '@components/card/match-card/types/card';
import { getIsButtonEnabled } from '@components/card/match-card/utils/get-is-button-enabled';
import type { createList, requestList } from '@/shared/types/match-types';

// export const mapSingleMatchData = (mates: singleMatchMate[] = []): SingleCardProps[] => {
//   return mates.map((mate) => {
//     const teamKey = mate.team;
//     const styleKey = normalizeChipKey(mate.style);

//     const chips = [teamKey, styleKey].filter((key): key is ChipColor => isChipColor(key));

//     return {
//       ...mate,
//       type: 'single',
//       imgUrl: [mate.imgUrl],
//       isCreated: Boolean(mate.isCreated),
//       chips,
//     };
//   });
// };

// export const mapGroupMatchData = (mates: getGroupMatchMate[] = []): GroupCardProps[] => {
//   return mates.map((mate) => ({
//     ...mate,
//     type: 'group',
//     isCreated: Boolean(mate.isCreated),
//   }));
// };

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
