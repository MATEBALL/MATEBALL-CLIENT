import type {
  ChipColor,
  GroupCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';
import { mockMateGroup } from '@mocks/mockMateGroup';
import { mockMateSingle } from '@mocks/mockMateSingle';

export type MatchCardData =
  | (SingleCardProps & { id: number; type: 'single' })
  | (GroupCardProps & { id: number; type: 'group' });

const useMatchCreate = (matchId: number, type: 'single' | 'group') => {
  const getMatchData = (): MatchCardData | null => {
    if (type === 'single') {
      const singleMatch = mockMateSingle.find((m) => m.id === matchId);
      return singleMatch
        ? {
            ...singleMatch,
            type: 'single',
            chips: [singleMatch.team, singleMatch.style] as ChipColor[],
          }
        : null;
    }

    const groupMatch = mockMateGroup.find((m) => m.id === matchId);
    return groupMatch
      ? {
          ...groupMatch,
          type: 'group',
        }
      : null;
  };

  return { matchData: getMatchData() };
};

export default useMatchCreate;
