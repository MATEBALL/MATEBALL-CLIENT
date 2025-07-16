import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import { formatToKoreanDate } from '@pages/home/utils/date-format';
import MatchGuideSection from '@pages/match/create/components/match-guide-section';
import type { MatchCardData } from '@pages/match/create/types/match-data-type';
import { useSuspenseQuery } from '@tanstack/react-query';
import type { getGroupMatchResultResponse } from '@/shared/types/match-types';

interface GroupMatchCardProps {
  matchId: number;
}

const GroupMatchCard = ({ matchId }: GroupMatchCardProps) => {
  const { data: mateGroup } = useSuspenseQuery<getGroupMatchResultResponse>(
    matchQueries.GROUP_MATCH_RESULT(matchId),
  );

  const matchData: MatchCardData | null = mateGroup
    ? {
        ...mateGroup,
        type: 'group',
      }
    : null;

  if (!matchData) {
    return null;
  }

  const cardProps: CardProps = {
    ...matchData,
    date: formatToKoreanDate(matchData.date),
    className: 'w-full',
  };

  return (
    <div className="w-full flex-col-center gap-[4rem]">
      <MatchGuideSection nickname={matchData.nickname} />
      <Card className="w-full" {...cardProps} />
    </div>
  );
};

export default GroupMatchCard;
