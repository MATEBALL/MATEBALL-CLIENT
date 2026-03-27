import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import { useSuspenseQuery } from '@tanstack/react-query';

const CompleteGroupCard = ({ matchId }: { matchId: number }) => {
  const { data } = useSuspenseQuery(matchQueries.GROUP_MATCH_RESULT(matchId));

  const cardProps: CardProps = {
    ...data,
    type: 'group',
    className: 'w-full',
  };

  return <Card isCreated {...cardProps} />;
};

export default CompleteGroupCard;
