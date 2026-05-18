import { tabStyleMap } from '@components/tab/tab/styles/tab-style';
import TabItem from '@components/tab/tab/tab-item';
// import { gaEvent } from '@libs/analytics';
// import type { MatchCardData } from './create/types/match-data-type';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { MATCH_TAB_LIST } from '@pages/match/constants/matching';
import { useMatchTabState } from '@pages/match/hooks/useMatchTabState';

const tabStyle = tabStyleMap.matchStatus;

const Match = () => {
  const { activeTab, handleTabChange, isCreatedTab } = useMatchTabState();

  // const handleCardClick = (card: MatchCardData) => {
  //   gaEvent('match_card_click', {
  //     match_id: card.id,
  //     match_type: card.type === 'single' ? 'one_to_one' : 'group',
  //     match_status: card.status,
  //   });
  // };

  return (
    <div className="h-full grow flex-col bg-gray-black">
      <nav className="sticky top-0 z-[var(--z-header)] w-full bg-gray-black">
        <ul className={`flex items-center ${tabStyle.gap}`}>
          {MATCH_TAB_LIST.map((tab) => (
            <TabItem
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              style={tabStyle}
              onClick={() => handleTabChange(tab)}
            />
          ))}
        </ul>
      </nav>

      <MatchTabPanel key={activeTab} isCreatedTab={isCreatedTab} />
    </div>
  );
};

export default Match;
