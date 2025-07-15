import { matchQueries } from '@apis/match/match-queries';
import type {
  ChipColor,
  GroupCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';
import { mockMateSingle } from '@mocks/mockMateSingle';
import { useSuspenseQuery } from '@tanstack/react-query';
import type { getGroupMatchResultResponse } from '@/shared/types/match-types';

export type MatchCardData =
  | (SingleCardProps & { id: number; type: 'single' })
  | (GroupCardProps & { id: number; type: 'group' });

const useMatchCreate = (matchId: number, type: 'single' | 'group' | null | undefined) => {
  /**
   * 그룹 매칭 생성 결과 useQuery
   * @returns id, nickname, awayTeam, homeTeam, stadium, date, count, imgUrl[]
   */

  const { data: mateGroup } = useSuspenseQuery<getGroupMatchResultResponse>(
    matchQueries.GROUP_MATCH_RESULT(matchId, type === 'group'),
  );

  const getMatchData = (): MatchCardData | null => {
    if (type === 'single') {
      const foundSingleMatch = mockMateSingle.find((m) => m.id === matchId);
      return foundSingleMatch
        ? {
            ...foundSingleMatch,
            type: 'single',
            imgUrl: [foundSingleMatch.imgUrl],
            chips: [foundSingleMatch.team, foundSingleMatch.style] as ChipColor[],
          }
        : null;
    }

    if (!mateGroup) return null;

    return {
      ...mateGroup,
      type: 'group',
    };
  };

  return { matchData: getMatchData() };
};

export default useMatchCreate;
