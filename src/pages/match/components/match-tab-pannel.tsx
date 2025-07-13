import Card from '@components/card/match-card/card';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import type { CardProps } from '@components/card/match-card/types/card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from '@routes/routes-config';
import { cn } from '@libs/cn';
import ChipState from '@components/chip/chip-state/chip-state';

interface MatchTabPanelProps {
  cards: CardProps[];
}

const fillTabItems = ['전체', '대기 중', '완료', '실패'];

const MatchTabPanel = ({ cards }: MatchTabPanelProps) => {
  const [filter, setFilter] = useState<string>('전체');
  const navigate = useNavigate();

  const filteredCards =
    filter === '전체'
      ? cards
      : cards.filter((card) => card.status?.includes(filter));

  const handleCardClick = (card: CardProps) => {
    if (card.status === '완료') {
      navigate(`${ROUTES.RESULT}?type=success`);
    }
  };

  return (
    <>
      <div className="pt-[2.4rem] pb-[2rem]">
        <FillTabList tabs={fillTabItems} onChange={setFilter} />
      </div>
      <div className="flex-col gap-[0.8rem]">
        {filteredCards.map((card) => (
          <div key={`${card.nickname}-${card.date}-${card.type}`}>
            <Card
              {...card}
              onClick={() => handleCardClick(card)}
              className={cn('w-full', {
                'cursor-pointer': card.status === '완료',
              })}
            />
            {card.status === '완료' && (
              <div className="mt-[0.4rem]">
                <ChipState label="매칭 완료" colorType="active" />
              </div>
            )}
            {card.status === '대기 중' && (
              <div className="mt-[0.4rem]">
                <ChipState label="새 요청" colorType="inactive" />
              </div>
            )}
            {card.status === '실패' && (
              <div className="mt-[0.4rem]">
                <ChipState label="실패" colorType="inactive" />
              </div>
            )}
          </div>
        ))}

      </div>
    </>
  );
};

export default MatchTabPanel;
