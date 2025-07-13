import type {
  ChipColor,
  GroupCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';
import { mockMateGroup } from '@mocks/mockMateGroup';
import { mockMateSingle } from '@mocks/mockMateSingle';
import { useEffect, useState } from 'react';

export type MatchCardData =
  | (SingleCardProps & { id: number; type: 'single' })
  | (GroupCardProps & { id: number; type: 'group' });

const useMatchCreate = (matchId: number, type: 'single' | 'group') => {
  const [matchData, setMatchData] = useState<MatchCardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let result: MatchCardData | null = null;

    if (type === 'single') {
      const singleMatch = mockMateSingle.find((m) => m.id === matchId);
      if (singleMatch) {
        result = {
          ...singleMatch,
          type: 'single',
          chips: [singleMatch.team, singleMatch.style] as ChipColor[],
        };
      }
    } else {
      const groupMatch = mockMateGroup.find((m) => m.id === matchId);
      if (groupMatch) {
        result = {
          ...groupMatch,
          type: 'group',
        };
      }
    }

    setMatchData(result);
    setLoading(false);
  }, [matchId, type]);

  return { matchData, loading };
};

export default useMatchCreate;
