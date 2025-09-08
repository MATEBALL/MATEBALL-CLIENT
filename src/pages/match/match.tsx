import FillTabList from '@components/tab/fill-tab/fill-tab-list';
import TabList from '@components/tab/tab/tab-list';
import { gaEvent } from '@libs/analytics';
import MatchTabPanel from '@pages/match/components/match-tab-pannel';
import { useMatchTabState } from '@pages/match/hooks/useMatchTabState';
import { fillTabItems } from '@pages/match/utils/match-status';
import type { MatchCardData } from './create/types/match-data-type';

const Match = () => {
  const { tabState, handleTabChange, handleFilterChange } = useMatchTabState();
  const { type: activeType, filter } = tabState;
  const statusParam = filter === '전체' ? '' : filter;

  const handleCardClick = (card: MatchCardData) => {
    gaEvent('match_card_click', {
      match_id: card.id,
      match_type: activeType === '1:1' ? 'one_to_one' : 'group',
      match_status: card.status,
    });
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
          className="my-[0.8rem] px-[1.6rem] py-[1.2rem]"
          tabs={fillTabItems}
          selected={filter}
          onChange={handleFilterChange}
        />
      </nav>

      <MatchTabPanel
        key={`${activeType}-${statusParam}`}
        activeType={activeType as '1:1' | '그룹'}
        statusParam={statusParam}
        filter={filter}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default Match;
