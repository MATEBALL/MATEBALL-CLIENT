import { matchQueries } from '@apis/match/match-queries';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import TabContent from '@components/tab/tab/tab-content';
import TabList from '@components/tab/tab/tab-list';
import { gaEvent } from '@libs/analytics';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { mapGroupMatchData, mapSingleMatchData } from '@pages/match/hooks/mapMatchData';
import { useMatchTabState } from '@pages/match/hooks/useMatchTabState';
import { fillTabItems } from '@pages/match/utils/match-status';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import type { MatchCardData } from './create/types/match-data-type';

const Match = () => {
  const { tabState, handleTabChange, handleFilterChange } = useMatchTabState();
  const { type: activeType, filter } = tabState;
  const statusParam = filter === '전체' ? '' : filter;

  const { data: singleData } = useQuery({
    ...matchQueries.SINGLE_MATCH_STATUS(statusParam),
    enabled: activeType === '1:1',
  });

  const { data: groupData } = useQuery({
    ...matchQueries.GROUP_MATCH_STATUS(statusParam),
    enabled: activeType === '그룹',
  });

  useEffect(() => {
    if (activeType === '1:1' && singleData?.results) {
      singleData.results.forEach((card) => {
        gaEvent('match_card_view', {
          match_id: card.id,
          match_type: 'one_to_one',
          match_status: card.status,
        });
      });
    } else if (activeType === '그룹' && groupData?.mates) {
      groupData.mates.forEach((card) => {
        gaEvent('match_card_view', {
          match_id: card.id,
          match_type: 'group',
          match_status: card.status,
        });
      });
    }
  }, [singleData, groupData, activeType]);

  const handleCardClick = (card: MatchCardData) => {
    gaEvent('match_card_click', {
      match_id: card.id,
      match_type: activeType === '1:1' ? 'one_to_one' : 'group',
      match_status: card.status,
    });
  };

  const contentMap = {
    '1:1': (
      <MatchTabPanel
        key="single"
        cards={mapSingleMatchData(singleData?.results)}
        filter={filter}
        onCardClick={handleCardClick}
      />
    ),
    그룹: (
      <MatchTabPanel
        key="group"
        cards={mapGroupMatchData(groupData?.mates)}
        filter={filter}
        onCardClick={handleCardClick}
      />
    ),
  };

  return (
    <div className="h-full grow flex-col">
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
