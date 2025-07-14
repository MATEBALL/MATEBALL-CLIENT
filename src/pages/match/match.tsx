import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import type { TabType } from '@components/tab/tab/tab-content';
import TabContent from '@components/tab/tab/tab-content';
import TabList from '@components/tab/tab/tab-list';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { singleMockData, groupMockData } from '@mocks/matchCardData';
const Match = () => {

  return (
    <div className="h-full flex-col overflow-hidden">
      <div className="scrollbar-hide grow overflow-y-auto">
        <div className="fixed top-[5.6rem] z-[var(--z-header)] w-full max-w-[43rem] bg-gray-100">
          <div className="px-[1.6rem]">
            <TabList colorMode="match" activeType={activeType} onTabChange={setActiveType} />
          </div>
          <div className="px-[1.6rem] py-[1rem]">
            <FillTabList tabs={fillTabItems} onChange={setFilter} />
          </div>
        </div>
        <TabContent activeType={activeType} contentMap={contentMap} />
      </div>
    </div>
  );
};

export default Match;
