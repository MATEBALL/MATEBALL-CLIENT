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
import { ROUTES } from '@routes/routes-config';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { getGroupMatchMate, singleMatchMate } from '@/shared/types/match-types';

const Match = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialTab = (searchParams.get('tab') as TabType) || '1:1';
  const initialFilter = searchParams.get('filter') || '전체';

  const [tabState, setTabState] = useState<{ type: TabType; filter: string }>({
    type: initialTab,
    filter: initialFilter,
  });

  const { type: activeType, filter } = tabState;
  const statusParam = filter === '전체' ? '' : filter;

  const updateQuery = (newTab: TabType, newFilter: string) => {
    const query = new URLSearchParams();
    query.set('tab', newTab);
    query.set('filter', newFilter);
    navigate(`${ROUTES.MATCH}?${query.toString()}`, { replace: true });
  };

  const handleTabChange = (type: TabType) => {
    setTabState({ type, filter: '전체' });
    updateQuery(type, '전체');
  };

  const handleFilterChange = (filter: string) => {
    setTabState((prev) => {
      const next = { ...prev, filter };
      updateQuery(next.type, filter);
      return next;
    });
  };

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
    '1:1': <MatchTabPanel key="single" cards={singleCards} filter={filter} tabType="1:1" />,
    그룹: <MatchTabPanel key="group" cards={groupCards} filter={filter} tabType="그룹" />,
  };

  return (
    <div className="scrollbar-hide h-full grow flex-col">
      <nav className="sticky top-0 z-[var(--z-under-header-section)] w-full bg-gray-100">
        <TabList
          className="px-[1.6rem]"
          colorMode="match"
          activeType={activeType}
          onTabChange={handleTabChange}
        />
        <FillTabList
          className="px-[1.6rem] py-[1.2rem]"
          tabs={fillTabItems}
          selected={filter}
          onChange={handleFilterChange}
        />
      </nav>
      <TabContent activeType={activeType} contentMap={contentMap} />
    </div>
  );
};

export default Match;
