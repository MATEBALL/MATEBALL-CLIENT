import ButtonCreate from '@components/button/button-create/button-create';
import type { TabType } from '@components/tab/tab/constants/tab-type';
import EmptyState from '@components/ui/empty-state';
import { mockMateGroup } from '@mocks/mockMateGroup';
import { mockMateSingle } from '@mocks/mockMateSingle';
import { renderMatchCards } from '@pages/home/utils/match-card-renderers';
import { format } from 'date-fns';
import { useMemo } from 'react';

interface MatchListSectionProps {
  activeType: TabType;
  isOneOnOne: boolean;
  isGroup: boolean;
  selectedDate: Date;
  onOpenGameInfoBottomSheet: () => void;
}

const MatchListSection = ({
  isOneOnOne,
  selectedDate,
  onOpenGameInfoBottomSheet,
}: MatchListSectionProps) => {
  const filteredMatches = useMemo(() => {
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    const sourceData = isOneOnOne ? mockMateSingle : mockMateGroup;
    return sourceData.filter((match) => match.date === formattedDate);
  }, [selectedDate, isOneOnOne]);

  return (
    <section className="p-[1.6rem]">
      <ButtonCreate
        label="맞춤 매칭 생성하기"
        className="ml-auto"
        onClick={onOpenGameInfoBottomSheet}
      />

      {filteredMatches.length > 0 ? (
        <div className="mt-[2rem] space-y-3">{renderMatchCards(filteredMatches, isOneOnOne)}</div>
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
