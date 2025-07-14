import type { TabType } from '@components/tab/tab/tab-content';
import TabContent from '@components/tab/tab/tab-content';
import TabList from '@components/tab/tab/tab-list';
import { groupMockData, singleMockData } from '@mocks/matchCardData';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { useState } from 'react';

const Match = () => {
  const [activeType, setActiveType] = useState<TabType>('1:1');

  const contentMap = {
    '1:1': <MatchTabPanel cards={singleMockData} />,
    그룹: <MatchTabPanel cards={groupMockData} />,
  };

  return (
    <div className="h-full flex-col">
      <section className="shrink-0 px-[1.6rem] pb-[1.2rem]">
        <TabList colorMode="match" activeType={activeType} onTabChange={setActiveType} />
      </section>
      <section className="scrollbar-hide overflow-y-auto">
        <TabContent activeType={activeType} contentMap={contentMap} />
      </section>
    </div>
  );
};

export default Match;
