import ButtonSection from '@pages/match/create/components/button-section';
import MatchCardSection from '@pages/match/create/components/match-card-section';
import { isInvalidMatchId } from '@pages/match/utils/match-validators';
import { ROUTES } from '@routes/routes-config';
import { useEffect } from 'react';
import { Navigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom';

interface CreateProps {
  setIsLoading: (value: boolean) => void;
}

const Create = () => {
  const { setIsLoading } = useOutletContext<CreateProps>();
  const [searchParams] = useSearchParams();
  const { matchId } = useParams();

  const matchTypeParam = searchParams.get('type');
  const matchType =
    matchTypeParam === 'single' || matchTypeParam === 'group' ? matchTypeParam : undefined;

  const numericMatchId = Number(matchId);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (isInvalidMatchId(matchId?.toString()) || !matchType) {
    return <Navigate to={ROUTES.ERROR} replace />;
  }

  return (
    <div className="h-full flex-col-between gap-[2.4rem] px-[1.6rem] pt-[9.6rem]">
      <MatchCardSection matchId={numericMatchId} type={matchType} />
      <ButtonSection matchType={matchType} />
    </div>
  );
};

export default Create;
