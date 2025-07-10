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

const MatchListSection = ({ isOneOnOne, selectedDate }: MatchListSectionProps) => {
  const formattedDate = format(selectedDate, 'yyyy-MM-dd');

  const filteredMateGroup = useMemo(() => {
    return mockMateGroup.filter((group) => {
      const groupDate = group.date;
      return groupDate === formattedDate;
    });
  }, [formattedDate]);

  const filteredMateSingle = useMemo(() => {
    return mockMateSingle.filter((single) => {
      const singleDate = single.date;
      return singleDate === formattedDate;
    });
  }, [formattedDate]);

  const currentMatches = isOneOnOne ? filteredMateSingle : filteredMateGroup;

  return (
    <section className="p-[1.6rem]">
      <ButtonCreate label={`맞춤 매칭 생성하기`} className="ml-auto" />

      {currentMatches.length > 0 ? (
        <div className="mt-[2rem] space-y-3">
          {currentMatches.map((match) => {
            if (isOneOnOne) {
              const singleMatch = match as (typeof mockMateSingle)[0];
              return (
                <Card
                  key={singleMatch.id}
                  type="single"
                  nickname={singleMatch.nickname}
                  date={singleMatch.date}
                  imgUrl={
                    Array.isArray(singleMatch.imgUrl) ? singleMatch.imgUrl : [singleMatch.imgUrl]
                  }
                  awayTeam={singleMatch.awayTeam}
                  homeTeam={singleMatch.homeTeam}
                  stadium={singleMatch.stadium}
                  age={singleMatch.age}
                  gender={singleMatch.gender}
                  team={singleMatch.team}
                  style={singleMatch.style}
                  chips={[singleMatch.team as ChipColor, singleMatch.style as ChipColor]}
                  matchRate={singleMatch.matchRate}
                />
              );
            } else {
              const groupMatch = match as (typeof mockMateGroup)[0];
              return (
                <Card
                  key={groupMatch.id}
                  type="group"
                  nickname={groupMatch.nickname}
                  date={groupMatch.date}
                  imgUrl={
                    Array.isArray(groupMatch.imgUrl) ? groupMatch.imgUrl : [groupMatch.imgUrl]
                  }
                  awayTeam={groupMatch.awayTeam}
                  homeTeam={groupMatch.homeTeam}
                  stadium={groupMatch.stadium}
                  count={groupMatch.count}
                  matchRate={groupMatch.matchRate}
                />
              );
            }
          })}
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
