import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import { formatToKoreanDate } from '@pages/home/utils/date-format';
import type { MatchCardData } from '@pages/match/hooks/use-mate-create';
import GroupMatchCard from '@pages/match/create/components/group-match-card-section';
import SingleMatchCard from '@pages/match/create/components/single-match-card-section';

interface MatchCardSectionProps {
  matchData: MatchCardData;
}

const MatchCardSection = ({ matchData }: MatchCardSectionProps) => {
  const cardProps: CardProps = {
    ...matchData,
    date: formatToKoreanDate(matchData.date),
    className: 'w-full',
  };

  return <Card className="w-full" {...cardProps} />;
};

export default MatchCardSection;
