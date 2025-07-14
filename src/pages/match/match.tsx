import type { TabType } from '@components/tab/tab/tab-content';
import TabContent from '@components/tab/tab/tab-content';
import TabList from '@components/tab/tab/tab-list';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { singleMockData, groupMockData } from '@mocks/matchCardData';
const Match = () => {

  return (
    <div className="flex-col h-[100dvh] overflow-hidden">
      <section className="px-[1.6rem]">
        <TabList
          colorMode="light"
          contentMap={{
            '1:1': <MatchTabPanel cards={singleMockData} />,
            그룹: <MatchTabPanel cards={groupMockData} />,
          }}
        />
      </section>
      <section className="scrollbar-hide overflow-y-auto">
        <TabContent activeType={activeType} contentMap={contentMap} />
      </section>
    </div>
  );
};

export default Match;
