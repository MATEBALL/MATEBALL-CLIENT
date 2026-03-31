import { matchMutations } from '@apis/match/match-mutations';
import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import type { GroupCardProps, SingleCardProps } from '@components/card/match-card/types/card';
// import { getColorType } from '@components/card/match-card/utils/get-color-type';
import EmptyView from '@components/ui/empty-view';
// import { cn } from '@libs/cn';
// import { CLICKABLE_STATUS_MAP } from '@pages/match/constants/matching';
// import { getPendingToast, isClickable } from '@pages/match/utils/match-status';
// import { ROUTES } from '@routes/routes-config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { showErrorToast } from '@/shared/utils/show-error-toast';
import { mapCreateMatchData, mapRequestMatchData } from '../hooks/mapMatchData';

type MatchableCardProps = SingleCardProps | GroupCardProps;

interface MatchTabPanelProps {
  isCreatedTab: boolean;
  onCardClick: (card: MatchableCardProps) => void;
}

const MatchTabPanel = ({ isCreatedTab, onCardClick }: MatchTabPanelProps) => {
  // const navigate = useNavigate();

  // const { data: singleData } = useQuery(matchQueries.SINGLE_MATCH_STATUS(''));
  // const { data: groupData } = useQuery(matchQueries.GROUP_MATCH_STATUS(''));

  const { data: createData } = useQuery({ ...matchQueries.CREATE_LIST(), enabled: isCreatedTab });
  const { data: requestData } = useQuery({
    ...matchQueries.REQUEST_LIST(),
    enabled: !isCreatedTab,
  });

  const cards = useMemo(() => {
    if (isCreatedTab) {
      return mapCreateMatchData(createData?.results);
    }
    return mapRequestMatchData(requestData?.results);
  }, [createData, requestData, isCreatedTab]);

  // const allCards: MatchableCardProps[] = useMemo(() => {
  //   const singles = mapSingleMatchData(singleData?.results);
  //   const groups = mapGroupMatchData(groupData?.mates);
  //   return [...singles, ...groups];
  // }, [singleData, groupData]);

  // const filteredCards = useMemo(
  //   () => allCards.filter((card) => card.isCreated === isCreatedTab),
  //   [allCards, isCreatedTab],
  // );

  const patchStageMutation = useMutation(matchMutations.MATCH_STAGE());

  // const handleCardClick = async (card: MatchableCardProps) => {
  //   onCardClick(card);

  //   const toastMsg = getPendingToast(card.status, card.type);
  //   if (toastMsg) {
  //     showErrorToast(toastMsg, '8.9rem', false);
  //     return;
  //   }

  //   const query = CLICKABLE_STATUS_MAP[card.status ?? ''];
  //   if (!query) return;

  //   try {
  //     if (card.status === '승인 완료') {
  //       await patchStageMutation.mutateAsync(card.id);
  //     }
  //     navigate(`${ROUTES.RESULT(card.id.toString())}?type=${query}&cardtype=${card.type}`);
  //   } catch (error) {
  //     console.error('매칭 상태 전환 실패', error);
  //   }
  // };

  return (
    <div className="z-[var(--z-under-header-section)] flex-col gap-[1.2rem] px-[1.6rem] pt-[1.6rem]">
      {cards.length === 0 ? (
        <EmptyView
          iconName="empty"
          className="mt-[8.5rem]"
          text="아직 매칭된 메이트가 없어요!"
          subText="홈 화면에서 메이트를 먼저 찾아 보세요."
        />
      ) : (
        cards.map((card) => (
          // <button
          //   key={`${card.type}-${card.id}`}
          //   type="button"
          //   onClick={() => handleCardClick(card)}
          //   className={cn('w-full', { 'cursor-pointer': isClickable(card.status) })}
          //   aria-disabled={!isClickable(card.status)}
          // >
          <Card
            key={card.id}
            id={card.id}
            type="match"
            nickname={card.nickname}
            count={card.count}
            imgUrl={card.imgUrl}
            awayTeam={card.awayTeam}
            homeTeam={card.homeTeam}
            stadium={card.stadium}
            date={card.date}
            isGroup={card.isGroup}
            matchTabType={isCreatedTab ? 'created' : 'requested'}
            statusLabel={card.statusLabel}
            className="bg-gray-950"
          />
          // </button>
        ))
      )}
      ;
    </div>
  );
};

export default MatchTabPanel;
