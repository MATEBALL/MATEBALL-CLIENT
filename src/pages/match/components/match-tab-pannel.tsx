import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import { cn } from '@libs/cn';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCardColor, statusToCategory } from '@pages/match/utils/match-status';

interface MatchTabPanelProps {
  cards: CardProps[];
}

const fillTabItems = ['전체', '대기 중', '완료', '실패'];

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
    <div className="flex flex-col gap-[0.8rem] pt-[2.4rem]">
      <div className="px-[1.6rem] pb-[2rem]">
        <FillTabList tabs={fillTabItems} onChange={setFilter} />
      </div>

      <div className="flex flex-col gap-[0.8rem] px-[1.6rem]">
        {filteredCards.map((card) => (
          <div key={`${card.nickname}-${card.date}-${card.type}`}>
            <Card
              {...card}
              color={getCardColor(card.status)}
              onClick={() => handleCardClick(card)}
              className={cn('w-full', {
                'cursor-pointer': card.status === '매칭 완료',
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchTabPanel;
