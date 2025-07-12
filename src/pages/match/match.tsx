import { useState } from 'react';
import TabList from '@components/tab/tab/tab-list';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';

const Match = () => {
  const [filter, setFilter] = useState<string>('전체');

  const fillTabItems = ['전체', '대기 중', '완료', '실패'];

  const singleMockData: CardProps[] = [
    {
      type: 'single',
      color: 'inactive',
      nickname: '메이트',
      date: '2025-07-15',
      imgUrl: ['/images/profile-1.png'],
      chips: ['두산', '열정응원러'],
      awayTeam: '어웨이',
      homeTeam: '홈',
      stadium: '경기장',
      age: 'NN세',
      gender: '성별',
      team: 'doosan',
      style: '열정응원러',
      status: '매칭 실패',
    },
    {
      type: 'single',
      color: 'inactive',
      nickname: '메이트',
      date: '2025-07-15',
      imgUrl: ['/images/profile-1.png'],
      chips: ['두산', '열정응원러'],
      awayTeam: '어웨이',
      homeTeam: '홈',
      stadium: '경기장',
      age: 'NN세',
      gender: '성별',
      team: 'doosan',
      style: '열정응원러',
      status: '승인 대기 중',
    },
  ];

  const groupMockData: CardProps[] = [
    {
      type: 'group',
      color: 'inactive',
      count: 3,
      nickname: '메이트',
      date: '2025-07-15',
      imgUrl: ['/images/profile-1.png', '/images/profile-1.png', '/images/profile-1.png'],
      chips: ['SSG'],
      awayTeam: '어웨이',
      homeTeam: '홈',
      stadium: '경기장',
      status: '승인 대기 중',
    },
    {
      type: 'group',
      color: 'active',
      count: 3,
      nickname: '메친여자',
      date: '2025-07-15',
      imgUrl: ['/images/profile-1.png', '/images/profile-1.png', '/images/profile-1.png'],
      chips: ['SSG'],
      awayTeam: '어웨이',
      homeTeam: '홈',
      stadium: '경기장',
      status: '승인 완료',
    },
  ];

  const filterCards = (cards: CardProps[]) => {
    if (filter === '전체') return cards;
    return cards.filter((card) => card.status?.includes(filter));
  };

  return (
    <div className="flex-col">
      <section className="px-[1.6rem]">
        <TabList
          colorMode="light"
          contentMap={{
            '1:1': (
              <>
                <div className="pt-[2.4rem] pb-[2rem]">
                  <FillTabList tabs={fillTabItems} onChange={setFilter} />
                </div>
                <div className="flex-col gap-[0.8rem]">
                  {filterCards(singleMockData).map((card, idx) => (
                    <Card key={idx} {...card} className="w-full" />
                  ))}
                </div>
              </>
            ),
            그룹: (
              <>
                <div className="pt-[2.4rem] pb-[2rem]">
                  <FillTabList tabs={fillTabItems} onChange={setFilter} />
                </div>
                <div className="flex-col gap-[0.8rem]">
                  {filterCards(groupMockData).map((card, idx) => (
                    <Card key={idx} {...card} className="w-full" />
                  ))}
                </div>
              </>
            ),
          }}
        />
      </section>
    </div>
  );
};

export default Match;
