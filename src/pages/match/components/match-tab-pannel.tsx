import Card from '@components/card/match-card/card';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import type { CardProps } from '@components/card/match-card/types/card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from '@routes/routes-config';
import { cn } from '@libs/cn';

interface MatchTabPanelProps {
  cards: CardProps[];
  filter: string;
}

const CLICKABLE_STATUS_MAP: Record<string, string> = {
  '매칭 완료': 'success',
  '승인 완료': 'agree',
  '새 요청': 'received',
  '매칭 실패': 'fail',
};

const MatchTabPanel = ({ cards, filter }: MatchTabPanelProps) => {
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
    filter === '전체'
      ? cards
      : cards.filter((card) => statusToCategory(card.status) === filter);

  const handleCardClick = (card: CardProps) => {
    const query = CLICKABLE_STATUS_MAP[card.status ?? ''];
    if (query) {
      navigate(`${ROUTES.RESULT}?type=${query}`);
    }
  };

  const isClickable = (status?: string) => {
    return Boolean(CLICKABLE_STATUS_MAP[status ?? '']);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="pt-[2.4rem] pb-[2rem] shrink-0">
        <FillTabList tabs={fillTabItems} onChange={setFilter} />
      </div>
      <div className="flex-col flex-1 overflow-y-auto gap-[0.8rem]">
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
    </>
  );
};

export default MatchTabPanel;
