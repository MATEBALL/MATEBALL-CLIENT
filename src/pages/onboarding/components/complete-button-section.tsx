import { matchMutations } from '@apis/match/match-mutations';
import { matchQueries } from '@apis/match/match-queries';
import Button from '@components/button/button/button';
import { gaEvent } from '@libs/analytics';
import { ROUTES } from '@routes/routes-config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import type { SelectedGame } from './date-select';

interface CompleteButtonSectionProps {
  pendingMatch: {
    game: SelectedGame;
    date: string;
    type: 'single' | 'group';
  };
}

const CompleteButtonSection = ({ pendingMatch }: CompleteButtonSectionProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createMatchMutation = useMutation(matchMutations.CREATE_MATCH());

  const handleGoToMate = () => {
    navigate(ROUTES.HOME);
  };

  const handleCreate = () => {
    const matchType = pendingMatch.type === 'single' ? 'DIRECT' : 'GROUP';
    const gaMatchType = pendingMatch.type === 'single' ? 'one_to_one' : 'group';

    gaEvent('match_create_click', {
      match_type: gaMatchType,
      role: 'creator',
    });

    createMatchMutation.mutate(
      {
        gameId: pendingMatch.game.id,
        matchType,
      },
      {
        onSuccess: () => {
          if (matchType === 'DIRECT') {
            queryClient.invalidateQueries({
              queryKey: matchQueries.SINGLE_MATCH_LIST(pendingMatch.date).queryKey,
            });
          } else {
            queryClient.invalidateQueries({
              queryKey: matchQueries.GROUP_MATCH_LIST(pendingMatch.date).queryKey,
            });
          }

          navigate(ROUTES.HOME);
        },
      },
    );
  };

  return (
    <div className="w-full">
      <section className="w-full flex-row-between gap-[0.8rem] p-[1.6rem]">
        <Button
          label="메이트 더 찾아보기"
          size="M"
          variant="skyblue"
          className="w-full"
          onClick={handleGoToMate}
        />
        <Button label="만들기" size="M" variant="blue" className="w-full" onClick={handleCreate} />
      </section>
    </div>
  );
};

export default CompleteButtonSection;
