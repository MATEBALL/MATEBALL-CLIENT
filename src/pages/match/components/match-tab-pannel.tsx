import { matchMutations } from '@apis/match/match-mutations';
import Card from '@components/card/match-card/card';
import type { GroupCardProps, SingleCardProps } from '@components/card/match-card/types/card';
import { getColorType } from '@components/card/match-card/utils/get-color-type';
import EmptyState from '@components/ui/empty-state';
import { cn } from '@libs/cn';
import { CLICKABLE_STATUS_MAP } from '@pages/match/constants/matching';
import { getCardColor, getPendingToast, statusToCategory } from '@pages/match/utils/match-status';
import { ROUTES } from '@routes/routes-config';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { showErrorToast } from '@/shared/utils/show-error-toast';

type MatchableCardProps = SingleCardProps | GroupCardProps;

interface MatchTabPanelProps {
  cards: MatchableCardProps[];
  filter: string;
}

const MatchTabPanel = ({ cards, filter }: MatchTabPanelProps) => {
  const navigate = useNavigate();

  const patchStageMutation = useMutation(matchMutations.MATCH_STAGE());

  const filteredCards =
    filter === '전체' ? cards : cards.filter((card) => statusToCategory(card.status) === filter);

  const handleCardClick = async (card: MatchableCardProps) => {
    const toastMsg = getPendingToast(card.status, card.type);
    if (toastMsg) {
      showErrorToast(toastMsg, '8.6rem', false);
      return;
    }

    const query = CLICKABLE_STATUS_MAP[card.status ?? ''];
    if (!query) return;

    try {
      if (card.status === '승인 완료') {
        await patchStageMutation.mutateAsync(card.id);
      }
      navigate(`${ROUTES.RESULT(card.id.toString())}?type=${query}&cardtype=${card.type}`);
    } catch (error) {
      console.error('매칭 상태 전환 실패', error);
    }
  };

  const isClickable = (status?: string) => Boolean(CLICKABLE_STATUS_MAP[status ?? '']);

  return (
    <div className="flex-col gap-[0.8rem] px-[1.6rem] py-[2rem]">
      {filteredCards.length === 0 ? (
        <EmptyState
          className="mt-[6.5rem]"
          text="아직 매칭된 메이트가 없어요!"
          subText="홈 화면에서 메이트를 먼저 찾아 보세요."
        />
      ) : (
        filteredCards.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => handleCardClick(card)}
            className={cn('w-full', {
              'cursor-pointer': isClickable(card.status),
            })}
            aria-disabled={!isClickable(card.status)}
          >
            <Card
              status={card.status}
              color={getCardColor(card.status)}
              chipColor={getColorType(card.status)}
              {...card}
            />
          </button>
        ))
      )}
    </div>
  );
};

export default MatchTabPanel;
