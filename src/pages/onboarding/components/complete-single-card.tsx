import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import type { CardProps, ChipColor } from '@components/card/match-card/types/card';
import { useSuspenseQuery } from '@tanstack/react-query';

const CompleteSingleCard = ({ matchId }: { matchId: number }) => {
  const { data } = useSuspenseQuery(matchQueries.SINGLE_MATCH_RESULT(matchId));

  const cardProps: CardProps = {
    ...data,
    type: 'single',
    imgUrl: [data.imgUrl],
    chips: [data.team, data.style] as ChipColor[],
    className: 'w-full',
  };

  return <Card isCreated {...cardProps} />;
};

export default CompleteSingleCard;
