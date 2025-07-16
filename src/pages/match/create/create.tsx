import ButtonSection from '@pages/match/create/components/button-section';
import MatchCardSection from '@pages/match/create/components/match-card-section';
import { isInvalidMatchId } from '@pages/match/utils/match-validators';
import { ROUTES } from '@routes/routes-config';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';

const Create = () => {
  const [searchParams] = useSearchParams();
  const { matchId } = useParams();
  const matchTypeParam = searchParams.get('type');
  const matchType =
    matchTypeParam === 'single' || matchTypeParam === 'group' ? matchTypeParam : undefined;

  const numericMatchId = Number(matchId);

  if (isInvalidMatchId(matchId?.toString()) || !matchType) {
    return <Navigate to={ROUTES.ERROR} replace />;
  }

  return (
    <div className="h-svh flex-col-between gap-[2.4rem] px-[1.6rem] pt-[9.6rem]">
      <MatchCardSection matchId={numericMatchId} type={matchType} />
      <ButtonSection matchType={matchType} />
    </div>
  );
};

export default Create;