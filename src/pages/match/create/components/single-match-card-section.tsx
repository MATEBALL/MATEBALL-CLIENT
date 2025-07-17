import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import type { CardProps, ChipColor } from '@components/card/match-card/types/card';
import MatchGuideSection from '@pages/match/create/components/match-guide-section';
import type { MatchCardData } from '@pages/match/create/types/match-data-type';
import { useSuspenseQuery } from '@tanstack/react-query';
import type { getSingleMatchResultResponse } from '@/shared/types/match-types';

interface SingleMatchCardProps {
  matchId: number;
}

const SingleMatchCard = ({ matchId }: SingleMatchCardProps) => {
  const { data: mateSingle } = useSuspenseQuery<getSingleMatchResultResponse>(
    matchQueries.SINGLE_MATCH_RESULT(matchId),
  );

  const matchData: MatchCardData | null = mateSingle
    ? {
        ...mateSingle,
        type: 'single',
        imgUrl: [mateSingle.imgUrl],
        chips: [mateSingle.team, mateSingle.style] as ChipColor[],
      }
    : null;

  if (!matchData) {
    return null;
  }

  const cardProps: CardProps = {
    ...matchData,
    date: matchData.date,
    className: 'w-full',
  };

  return (
    <div className="w-full flex-col-center gap-[4rem]">
      <MatchGuideSection nickname={matchData.nickname} />
      <Card className="w-full" {...cardProps} />
    </div>
  );
};

export default SingleMatchCard;
