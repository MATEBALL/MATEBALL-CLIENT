import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import { cn } from '@libs/cn';
import { ROUTES } from '@routes/routes-config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MatchTabPanelProps {
  cards: CardProps[];
}

const fillTabItems = ['전체', '대기 중', '완료', '실패'];

const MatchTabPanel = ({ cards }: MatchTabPanelProps) => {
  const [filter, setFilter] = useState<string>('전체');
  const navigate = useNavigate();

  const statusToCategory = (status?: string): '대기 중' | '완료' | '실패' | '' => {
    if (!status) return '';
    if (['승인대기중', '요청대기중', '대기중'].includes(status)) return '대기 중';
    if (['승인 완료', '매칭 완료'].includes(status)) return '완료';
    if (['매칭 실패'].includes(status)) return '실패';
    return '';
  };
  const getCardColor = (status?: string): 'active' | 'inactive' => {
    const inactiveStatuses = ['승인대기중', '요청대기중', '대기중', '매칭 실패'];
    return inactiveStatuses.includes(status ?? '') ? 'inactive' : 'active';
  };
  const filteredCards =
    filter === '전체' ? cards : cards.filter((card) => statusToCategory(card.status) === filter);

  const handleCardClick = (card: CardProps) => {
    if (statusToCategory(card.status) === '완료') {
      navigate(`${ROUTES.RESULT}?type=success`);
    }
  };

  return (
    <div className="h-full flex-col">
      <div className="shrink-0 pt-[2.4rem] pb-[2rem]">
        <FillTabList tabs={fillTabItems} onChange={setFilter} />
      </div>
      <div className="flex-1 flex-col gap-[0.8rem] overflow-y-auto">
        {filteredCards.map((card) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default MatchTabPanel;
