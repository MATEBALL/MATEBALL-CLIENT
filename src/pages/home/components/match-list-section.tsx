import ButtonCreate from '@components/button/button-create/button-create';
import type { TabType } from '@components/tab/tab/constants/tab-type';
import EmptyState from '@components/ui/empty-state';
import { mockMateGroup } from '@mocks/mockMateGroup';
import { mockMateSingle } from '@mocks/mockMateSingle';
import { renderMatchCards } from '@pages/home/utils/match-card-renderers';
import { format } from 'date-fns';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const filteredMatches = useMemo(() => {
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    const sourceData = isOneOnOne ? mockMateSingle : mockMateGroup;
    return sourceData.filter((match) => match.date === formattedDate);
  }, [selectedDate, isOneOnOne]);

  const handleCardClick = (matchId: number) => {
    if (isOneOnOne) {
      navigate(`/match/single/${matchId}?type=sent&mode=single`);
    } else {
      navigate(`/match/groups/mates/${matchId}?type=sent&mode=group`);
    }
  };

  return (
    <section className="p-[1.6rem]">
      <ButtonCreate
        label="맞춤 매칭 생성하기"
        className="ml-auto"
        onClick={onOpenGameInfoBottomSheet}
      />

      {filteredMatches.length > 0 ? (
        <div className="mt-[2rem] space-y-3">
          {renderMatchCards(filteredMatches, isOneOnOne, handleCardClick)}
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
