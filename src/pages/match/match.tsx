import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import type { TabType } from '@components/tab/tab/tab-content';
import TabContent from '@components/tab/tab/tab-content';
import TabList from '@components/tab/tab/tab-list';
import { groupMockData, singleMockData } from '@mocks/matchCardData';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { fillTabItems } from '@pages/match/utils/match-status';
import { useState } from 'react';

const Match = () => {
  const [activeType, setActiveType] = useState<TabType>('1:1');
  const [filter, setFilter] = useState('전체');

  const contentMap = {
    '1:1': <MatchTabPanel cards={singleMockData} filter={filter} />,
    그룹: <MatchTabPanel cards={groupMockData} filter={filter} />,
  };

  return (
    <div className="h-full flex-col">
      <div className="scrollbar-hide grow">
        <nav className="sticky top-[5.6rem] z-[var(--z-under-header-section)] w-full bg-gray-100">
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
    </div>
  );
};

export default Match;
