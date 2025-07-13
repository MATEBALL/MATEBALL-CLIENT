import TabList from '@components/tab/tab/tab-list';
import { groupMockData, singleMockData } from '@mocks/matchCardData';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';

const Match = () => {
  return (
    <div className="h-[100dvh] flex-col overflow-hidden">
      <section className="px-[1.6rem]">
        <TabList
          colorMode="light"
          contentMap={{
            '1:1': <MatchTabPanel cards={singleMockData} />,
            그룹: <MatchTabPanel cards={groupMockData} />,
          }}
        />
      </section>
    </div>
  );
};

export default Match;
