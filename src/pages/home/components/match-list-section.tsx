import { gameQueries } from '@apis/game/game-queries';
import { matchQueries } from '@apis/match/match-queries';
import ButtonCreate from '@components/button/button-create/button-create';
import type { TabType } from '@components/tab/tab/constants/tab-type';
import EmptyView from '@components/ui/empty-view';
import { gaEvent } from '@libs/analytics';
import { renderMatchCards } from '@pages/home/utils/match-card-renderers';
import { ROUTES } from '@routes/routes-config';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface MatchListSectionProps {
  activeType: TabType;
  isSingle: boolean;
  isGroup: boolean;
  selectedDate: Date;
  onOpenGameInfoBottomSheet: () => void;
}

const MatchListSection = ({
  isSingle,
  isGroup,
  selectedDate,
  onOpenGameInfoBottomSheet,
}: MatchListSectionProps) => {
  const navigate = useNavigate();
  const formattedDate = format(selectedDate, 'yyyy-MM-dd');

  const { data: singleMatchData } = useQuery({
    ...matchQueries.SINGLE_MATCH_LIST(formattedDate),
    enabled: isSingle,
  });

  const { data: groupMatchData } = useQuery({
    ...matchQueries.GROUP_MATCH_LIST(formattedDate),
    enabled: isGroup,
  });

  const { data: gameSchedule, isLoading: gameLoading } = useQuery({
    ...gameQueries.GAME_LIST(formattedDate),
  });

  const filteredMatches = useMemo(() => {
    return isSingle ? (singleMatchData?.mates ?? []) : (groupMatchData?.mates ?? []);
  }, [isSingle, singleMatchData, groupMatchData]);

  const handleCardClick = (matchId: number) => {
    const matchType = isSingle ? 'one_to_one' : 'group';
    gaEvent('home_profile_view', { match_id: matchId, match_type: matchType });

    if (isSingle) {
      navigate(`${ROUTES.MATCH_SINGLE(matchId.toString())}?type=sent&mode=single`);
    } else {
      navigate(`${ROUTES.GROUP_MATES(matchId.toString())}?type=sent&mode=group`);
    }
  };

  const hasGames = gameSchedule && gameSchedule.length > 0;

  const handleCreateClick = () => {
    const matchType = isSingle ? 'one_to_one' : 'group';
    gaEvent('match_create_click', { match_type: matchType, role: 'creator' });
    onOpenGameInfoBottomSheet();
  };

  return (
    <section className="p-[1.6rem]">
      <ButtonCreate
        label="맞춤 매칭 생성하기"
        className="ml-auto"
        textColor={!gameLoading && !hasGames ? 'text-gray-500' : undefined}
        onClick={!gameLoading && !hasGames ? undefined : handleCreateClick}
      />

      {!gameLoading && !hasGames ? (
        <EmptyView
          iconName="empty-2"
          className="mt-[4rem]"
          text="해당 날짜에는 진행되는 경기가 없어요!"
          subText="경기가 있는 다른 날짜를 탐색해 보세요."
        />
      ) : filteredMatches.length === 0 ? (
        <EmptyView
          iconName="empty"
          className="mt-[4rem]"
          text="해당 날짜에 등록된 매칭이 없어요!"
          subText="맞춤 매칭을 생성하거나, 다른 날짜를 탐색해 보세요."
        />
      ) : (
        <div className="mt-[1.6rem] space-y-[0.8rem]">
          {renderMatchCards(filteredMatches, isSingle, handleCardClick)}
        </div>
      )}
    </section>
  );
};

export default MatchListSection;
