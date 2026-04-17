import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import { useSuspenseQuery } from '@tanstack/react-query';

const CompleteGroupCard = ({ matchId }: { matchId: number }) => {
  const { data } = useSuspenseQuery(matchQueries.GROUP_MATCH_RESULT(matchId));

  const cardProps: CardProps = {
    id: data.id,
    type: 'game',
    nickname: data.nickname,
    count: data.count,
    imgUrl: Array.isArray(data.imgUrl) ? data.imgUrl : [data.imgUrl],
    awayTeam: data.awayTeam,
    homeTeam: data.homeTeam,
    stadium: data.stadium,
    date: data.date,
    isGroup: true,
    className: 'w-full',
  };

  return <Card {...cardProps} />;
};

export default CompleteGroupCard;
