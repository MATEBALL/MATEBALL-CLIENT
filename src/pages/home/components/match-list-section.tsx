import ButtonCreate from '@components/button/button-create/button-create';
import Card from '@components/card/match-card/card';
import type { ChipColor } from '@components/card/match-card/types/card';
import EmptyState from '@components/ui/empty-state';
import type { TabType } from '@hooks/use-tab-state';
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

type SingleMatch = (typeof mockMateSingle)[0];
type GroupMatch = (typeof mockMateGroup)[0];

const MatchListSection = ({ isOneOnOne, selectedDate }: MatchListSectionProps) => {
  const formattedDate = format(selectedDate, 'yyyy-MM-dd');

  const filteredMatches = useMemo(() => {
    const sourceData = isOneOnOne ? mockMateSingle : mockMateGroup;
    return sourceData.filter((match) => match.date === formattedDate);
  }, [formattedDate, isOneOnOne]);

  const getCommonProps = (match: SingleMatch | GroupMatch) => ({
    nickname: match.nickname,
    date: match.date,
    imgUrl: Array.isArray(match.imgUrl) ? match.imgUrl : [match.imgUrl],
    awayTeam: match.awayTeam,
    homeTeam: match.homeTeam,
    stadium: match.stadium,
    matchRate: match.matchRate,
  });

  const renderSingleCard = (match: SingleMatch) => (
    <Card
      key={match.id}
      type="single"
      {...getCommonProps(match)}
      age={match.age}
      gender={match.gender}
      team={match.team}
      style={match.style}
      chips={[match.team as ChipColor, match.style as ChipColor]}
    />
  );

  const renderGroupCard = (match: GroupMatch) => (
    <Card key={match.id} type="group" {...getCommonProps(match)} count={match.count} />
  );

  const renderMatchCards = () => {
    return filteredMatches.map((match) => {
      if (isOneOnOne) {
        return renderSingleCard(match as SingleMatch);
      }
      return renderGroupCard(match as GroupMatch);
    });
  };

  return (
    <section className="p-[1.6rem]">
      <ButtonCreate label="맞춤 매칭 생성하기" className="ml-auto" />

      {filteredMatches.length > 0 ? (
        <div className="mt-[2rem] space-y-3">{renderMatchCards()}</div>
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
