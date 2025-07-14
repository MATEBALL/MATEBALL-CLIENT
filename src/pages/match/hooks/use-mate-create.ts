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
      const foundSingleMatch = mockMateSingle.find((m) => m.id === matchId);
      return foundSingleMatch
        ? {
            ...foundSingleMatch,
            type: 'single',
            chips: [foundSingleMatch.team, foundSingleMatch.style] as ChipColor[],
          }
        : null;
    }

    const foundGroupMatch = mockMateGroup.find((m) => m.id === matchId);
    return foundGroupMatch
      ? {
          ...foundGroupMatch,
          type: 'group',
        }
      : null;
  };

  return { matchData: getMatchData() };
};

export default useMatchCreate;
