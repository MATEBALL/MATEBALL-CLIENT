import ButtonCreate from '@components/button/button-create/button-create';
import EmptyState from '@components/ui/empty-state';
import type { TabType } from '@hooks/use-tab-state';
import {
  type GroupMatch,
  renderMatchCards,
  type SingleMatch,
} from '@pages/home/utils/match-card-renderers';
import { format } from 'date-fns';
import { useMemo } from 'react';
import { mockMateGroup } from '../mocks/mockMateGroup';
import { mockMateSingle } from '../mocks/mockMateSingle';

interface MatchListSectionProps {
  activeType: TabType;
  isOneOnOne: boolean;
  isGroup: boolean;
  selectedDate: Date;
}

const MatchListSection = ({ isOneOnOne, selectedDate }: MatchListSectionProps) => {
  const formattedDate = format(selectedDate, 'yyyy-MM-dd');

  const filteredMatches = useMemo(() => {
    const sourceData = isOneOnOne ? mockMateSingle : mockMateGroup;
    return sourceData.filter((match) => match.date === formattedDate);
  }, [formattedDate, isOneOnOne]);

  return (
    <section className="p-[1.6rem]">
      <ButtonCreate label="맞춤 매칭 생성하기" className="ml-auto" />

      {filteredMatches.length > 0 ? (
        <div className="mt-[2rem] space-y-3">
          {renderMatchCards(filteredMatches as (SingleMatch | GroupMatch)[], isOneOnOne)}
        </div>
      ) : (
        <EmptyState
          className="mt-[4rem]"
          text="해당 날짜에 등록된 매칭이 없어요!"
          subText="맞춤 매칭을 생성하거나, 다른 날짜를 탐색해 보세요."
        />
      )}
    </section>
  );
};

export default MatchListSection;
