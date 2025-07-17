import { matchQueries } from '@apis/match/match-queries';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import TabContent from '@components/tab/tab/tab-content';
import TabList from '@components/tab/tab/tab-list';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { mapGroupMatchData, mapSingleMatchData } from '@pages/match/hooks/mapMatchData';
import { useMatchTabState } from '@pages/match/hooks/useMatchTabState';
import { fillTabItems } from '@pages/match/utils/match-status';
import { useQuery } from '@tanstack/react-query';

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

  const contentMap = {
    '1:1': (
      <MatchTabPanel
        key="single"
        cards={mapSingleMatchData(singleData?.mates)}
        filter={filter}
        tabType="1:1"
      />
    ),
    그룹: (
      <MatchTabPanel
        key="group"
        cards={mapGroupMatchData(groupData?.mates)}
        filter={filter}
        tabType="그룹"
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
