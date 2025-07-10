import ButtonCreate from '@components/button/button-create/button-create';
import EmptyState from '@components/ui/empty-state';
import type { TabType } from '@hooks/use-tab-state';

interface MatchListSectionProps {
  activeType: TabType;
  isOneOnOne: boolean;
  isGroup: boolean;
}

const MatchListSection = ({ isOneOnOne }: MatchListSectionProps) => {
  const currentMatches = isOneOnOne ? `일대일카드리스트` : `그룹카드리스트  `;

  return (
    <section className="p-[1.6rem]">
      <ButtonCreate label={`맞춤 매칭 생성하기`} className="ml-auto" />

      {currentMatches ? (
        <div className="mt-[2rem] space-y-3">{currentMatches}</div>
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
