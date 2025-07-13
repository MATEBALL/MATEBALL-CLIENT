import { useState } from 'react';
import TabList from '@components/tab/tab/tab-list';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { groupMockData, singleMockData } from '@mocks/matchCardData';

const Match = () => {
  const [activeType, setActiveType] = useState<'1:1' | '그룹'>('1:1');

  const contentMap = {
    '1:1': <MatchTabPanel cards={singleMockData} />,
    그룹: <MatchTabPanel cards={groupMockData} />,
  };

  return (
    <div className="h-[100svh] flex-col overflow-hidden">
      <section className="shrink-0 px-[1.6rem]">
        <TabList colorMode="match" activeType={activeType} onTabChange={setActiveType} />
      </section>

      <section className="scrollbar-hide flex-1 overflow-y-auto">{contentMap[activeType]}</section>
    </div>
  );
};

export default Match;
