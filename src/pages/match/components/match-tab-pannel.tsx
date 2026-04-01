// import { matchMutations } from '@apis/match/match-mutations';

import { matchMutations } from '@apis/match/match-mutations';
import { matchQueries } from '@apis/match/match-queries';
import Card from '@components/card/match-card/card';
import type { MatchCardProps } from '@components/card/match-card/types/card';
// import type { GroupCardProps, SingleCardProps } from '@components/card/match-card/types/card';
// import { getColorType } from '@components/card/match-card/utils/get-color-type';
import EmptyView from '@components/ui/empty-view';
import { MATCH_PENDING_TOAST_MESSAGES } from '@constants/error-toast';
import { cn } from '@libs/cn';
// import { cn } from '@libs/cn';
// import { CLICKABLE_STATUS_MAP } from '@pages/match/constants/matching';
import { isClickable } from '@pages/match/utils/match-status';
import { ROUTES } from '@routes/routes-config';
// import { ROUTES } from '@routes/routes-config';
// import { useMutation } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { showErrorToast } from '@/shared/utils/show-error-toast';
import { CLICKABLE_STATUS_MAP } from '../constants/matching';
// import { useNavigate } from 'react-router-dom';
// import { showErrorToast } from '@/shared/utils/show-error-toast';
import { mapCreateMatchData, mapRequestMatchData } from '../hooks/mapMatchData';

type MatchableCardProps = MatchCardProps;

interface MatchTabPanelProps {
  isCreatedTab: boolean;
  onCardClick?: (card: MatchableCardProps) => void;
}

const MatchTabPanel = ({ isCreatedTab, onCardClick }: MatchTabPanelProps) => {
  const navigate = useNavigate();

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

  const patchStageMutation = useMutation(matchMutations.MATCH_STAGE());

  const handleCardClick = async (card: MatchableCardProps) => {
    onCardClick?.(card);

    // TODO: 다른 버튼 눌렀을 때 토스트 차단
    if (!card.hasUpdate) {
      const message = isCreatedTab
        ? MATCH_PENDING_TOAST_MESSAGES.REQUEST_WAITING
        : MATCH_PENDING_TOAST_MESSAGES.APPROVAL_WAITING;

      showErrorToast(message, '8.8rem', false);
      return;
    }

    // const toastMsg = getPendingToast(card.statusLabel, card.type);
    // if (toastMsg) {
    //   showErrorToast(toastMsg, '8.9rem', false);
    //   return;
    // }

    const query = CLICKABLE_STATUS_MAP[card.statusLabel ?? ''];
    if (!query) return;

    try {
      if (card.statusLabel === '승인 완료') {
        await patchStageMutation.mutateAsync(card.id);
      }
      navigate(`${ROUTES.RESULT(card.id.toString())}?type=${query}&cardtype=${card.type}`);
    } catch (error) {
      console.error('매칭 상태 전환 실패', error);
    }
  };

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
          <button
            key={`${card.type}-${card.id}`}
            type="button"
            onClick={() => handleCardClick(card)}
            className={cn('w-full', { 'cursor-pointer': isClickable(card.statusLabel) })}
            aria-disabled={!isClickable(card.statusLabel)}
          >
            <Card key={card.id} {...card} className="bg-gray-950" />
          </button>
        ))
      )}
      ;
    </div>
  );
};

export default MatchTabPanel;
