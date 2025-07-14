import TabList from '@components/tab/tab/tab-list';
import { groupMockData, singleMockData } from '@mocks/matchCardData';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { useState } from 'react';

const Match = () => {
  const [activeType, setActiveType] = useState<'1:1' | '그룹'>('1:1');

  const contentMap = {
    '1:1': <MatchTabPanel cards={singleMockData} />,
    그룹: <MatchTabPanel cards={groupMockData} />,
  };

  return (
    <div className="max-h-[100dvh] flex-col">
      <section className="shrink-0 px-[1.6rem] pb-[1.2rem]">
        <TabList colorMode="match" activeType={activeType} onTabChange={setActiveType} />
      </section>
      <section className="scrollbar-hide overflow-y-auto">{contentMap[activeType]}</section>
    </div>
  );
};

export default Match;
