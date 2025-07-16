import { matchQueries } from '@apis/match/match-queries';
import type {
  ChipColor,
  GroupCardProps,
  SingleCardProps,
} from '@components/card/match-card/types/card';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import type { TabType } from '@components/tab/tab/tab-content';
import TabContent from '@components/tab/tab/tab-content';
import TabList from '@components/tab/tab/tab-list';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { fillTabItems } from '@pages/match/utils/match-status';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import type { getGroupMatchMate, singleMatchMate } from '@/shared/types/match-types';

const Match = () => {
  const [activeType, setActiveType] = useState<TabType>('1:1');
  const [filter, setFilter] = useState('전체');

  const statusParam = filter === '전체' ? '' : filter;

  const { data: singleData } = useQuery<{ mates: singleMatchMate[] }>({
    ...matchQueries.SINGLE_MATCH_STATUS(statusParam),
    enabled: activeType === '1:1',
  });

  const { data: groupData } = useQuery<{ mates: getGroupMatchMate[] }>({
    ...matchQueries.GROUP_MATCH_STATUS(statusParam),
    enabled: activeType === '그룹',
  });

  const singleCards: SingleCardProps[] = (singleData?.mates ?? []).map((card) => ({
    ...card,
    type: 'single',
    imgUrl: [card.imgUrl],
    chips: [card.team, card.style].map((v) => v as ChipColor),
  }));

  const groupCards: GroupCardProps[] = (groupData?.mates ?? []).map((card) => ({
    ...card,
    type: 'group',
  }));

  const contentMap = {
    '1:1': (
      <MatchTabPanel key="single" cards={singleCards} filter={filter} />
    ),
    그룹: <MatchTabPanel key="group" cards={groupCards} filter={filter} />,
  };

  return (
    <div className="scrollbar-hide h-full grow flex-col">
      <nav className="sticky top-0 z-[var(--z-under-header-section)] w-full bg-gray-100">
        <TabList
          className="px-[1.6rem]"
          colorMode="match"
          activeType={activeType}
          onTabChange={setActiveType}
        />
        <FillTabList className="px-[1.6rem] py-[1rem]" tabs={fillTabItems} onChange={setFilter} />
      </nav>
      <TabContent activeType={activeType} contentMap={contentMap} />
    </div>
  );
};

export default Match;
