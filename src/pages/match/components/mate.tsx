import { matchMutations } from '@apis/match/match-mutations';
import { matchQueries } from '@apis/match/match-queries';
import { MATCH_REQUEST_ERROR_MESSAGES } from '@constants/error-toast';
import { gaEvent } from '@libs/analytics';
import MateCarousel from '@pages/match/components/mate-carousel';
import MateFooter from '@pages/match/components/mate-footer';
import MateHeader from '@pages/match/components/mate-header';
import { mapMateData } from '@pages/match/utils/mate';
import { ROUTES } from '@routes/routes-config';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { showErrorToast } from '@/shared/utils/show-error-toast';

interface MateProps {
  matchId: number;
  isGroupMatching?: boolean;
}

interface LayoutContext {
  setIsLoading: (value: boolean) => void;
}

const Mate = ({ matchId, isGroupMatching = true }: MateProps) => {
  const { setIsLoading } = useOutletContext<LayoutContext>();
  const navigate = useNavigate();

  const { mutate: requestMatch } = useMutation(matchMutations.MATCH_REQUEST());

  const handleRequestClick = () => {
    if (typeof matchId !== 'number') return;

    gaEvent('match_request_click', {
      match_id: matchId,
      match_type: isGroupMatching ? 'group' : 'one_to_one',
      role: 'requester',
    });

    requestMatch(matchId, {
      onSuccess: () => {
        const mode = isGroupMatching ? 'group' : 'single';
        navigate(`${ROUTES.RESULT(`${matchId}`)}?type=sent&mode=${mode}`);
      },
      onError: (error: unknown) => {
        const status = (error as AxiosError)?.response?.status;
        if (status === MATCH_REQUEST_ERROR_MESSAGES.TOO_MANY_REQUESTS.status) {
          showErrorToast(MATCH_REQUEST_ERROR_MESSAGES.TOO_MANY_REQUESTS.message, '8.3rem');
        } else if (status === MATCH_REQUEST_ERROR_MESSAGES.DUPLICATE_MATCH.status) {
          showErrorToast(MATCH_REQUEST_ERROR_MESSAGES.DUPLICATE_MATCH.message, '8.3rem');
        }
      },
    });
  };

  const { data, isLoading } = useQuery({
    ...matchQueries.MATCH_MEMBERS(matchId),
    enabled: !!matchId,
  });
  const mates = (data?.results || []).map(mapMateData);
  const leader = data?.leader ?? '';

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isLoading, setIsLoading]);

  return (
    <div className="h-full flex-col-between bg-gray-white">
      <section className="w-full flex-col-center gap-[3.9rem] pt-[4.65rem]">
        <MateHeader nickname={leader} isGroupMatching={isGroupMatching} />
        <MateCarousel
          mates={mates}
          currentIndex={currentIndex}
          onDotClick={setCurrentIndex}
          isGroupMatching={isGroupMatching}
        />
      </section>
      <MateFooter isGroupMatching={isGroupMatching} onRequestClick={handleRequestClick} />
    </div>
  );
};

export default Mate;
