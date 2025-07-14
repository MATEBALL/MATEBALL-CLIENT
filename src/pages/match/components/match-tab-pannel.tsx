import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import { cn } from '@libs/cn';
import { fillTabItems, getCardColor, statusToCategory } from '@pages/match/utils/match-status';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MatchTabPanelProps {
  cards: CardProps[];
}

const MatchTabPanel = ({ cards }: MatchTabPanelProps) => {
  const [filter, setFilter] = useState<string>('전체');
  const navigate = useNavigate();

  const filteredCards =
    filter === '전체' ? cards : cards.filter((card) => statusToCategory(card.status) === filter);

  const handleCardClick = (card: CardProps) => {
    if (statusToCategory(card.status) === '완료') {
      navigate(`${ROUTES.RESULT}?type=success`);
    }
  };

  return (
    <div className="flex-col gap-[0.8rem] pt-[2.4rem]">
      <div className="px-[1.6rem] pb-[2rem]">
        <FillTabList tabs={fillTabItems} onChange={setFilter} />
      </div>

      <div className="flex-col gap-[0.8rem] px-[1.6rem]">
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
    </div>
  );
};

export default MatchTabPanel;
