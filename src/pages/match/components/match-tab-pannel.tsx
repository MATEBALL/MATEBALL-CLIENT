import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import { cn } from '@libs/cn';
import { getCardColor, statusToCategory } from '@pages/match/utils/match-status';
import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

interface MatchTabPanelProps {
  cards: CardProps[];
  filter: string;
}

const MatchTabPanel = ({ cards, filter }: MatchTabPanelProps) => {
  const navigate = useNavigate();

  const filteredCards =
    filter === '전체' ? cards : cards.filter((card) => statusToCategory(card.status) === filter);

  const handleCardClick = (card: CardProps) => {
    if (statusToCategory(card.status) === '완료') {
      navigate(`${ROUTES.RESULT}?type=success`);
    }
  };

  return (
    <div className="flex-col gap-[0.8rem] px-[1.6rem] pt-[10rem] pb-[3rem]">
      {filteredCards.map((card) => (
        <Card
          key={card.id}
          {...card}
          color={getCardColor(card.status)}
          onClick={() => handleCardClick(card)}
          className={cn('w-full', {
            'cursor-pointer': card.status === '매칭 완료',
          })}
        />
      ))}
    </div>
  );
};

export default MatchTabPanel;
