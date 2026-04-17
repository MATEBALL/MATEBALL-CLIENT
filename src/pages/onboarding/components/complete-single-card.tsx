import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import { useSuspenseQuery } from '@tanstack/react-query';

const CompleteSingleCard = ({ matchId }: { matchId: number }) => {
  const { data } = useSuspenseQuery(matchQueries.SINGLE_MATCH_RESULT(matchId));

  const cardProps: CardProps = {
    id: data.id,
    type: 'game',
    nickname: data.nickname,
    count: 1,
    imgUrl: [data.imgUrl],
    awayTeam: data.awayTeam,
    homeTeam: data.homeTeam,
    stadium: data.stadium,
    date: data.date,
    isGroup: false,
    className: 'w-full',
  };

  return <Card {...cardProps} />;
};

export default CompleteSingleCard;
