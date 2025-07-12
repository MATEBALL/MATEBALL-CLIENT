import Card from '@components/card/match-card/card';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import type { CardProps } from '@components/card/match-card/types/card';
import { useState } from 'react';

interface MatchTabPanelProps {
  cards: CardProps[];
}

const fillTabItems = ['전체', '대기 중', '완료', '실패'];

const MatchTabPanel = ({ cards }: MatchTabPanelProps) => {
  const [filter, setFilter] = useState<string>('전체');

  const filteredCards = filter === '전체'
    ? cards
    : cards.filter((card) => card.status?.includes(filter));

  return (
    <>
      <div className="pt-[2.4rem] pb-[2rem]">
        <FillTabList tabs={fillTabItems} onChange={setFilter} />
      </div>
      <div className="flex-col gap-[0.8rem]">
        {filteredCards.map((card) => (
          <Card
            key={`${card.type}-${card.nickname}-${card.date}-${card.status}`}
            {...card}
            className="w-full"
          />
        ))}
      </div>
    </>
  );
};

export default MatchTabPanel;
