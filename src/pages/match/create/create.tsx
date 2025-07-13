import { isInvalidMatchId } from '@pages/match/constants/matching';
import ButtonSection from '@pages/match/create/components/button-section';
import Header from '@pages/match/create/components/header';
import MatchCardSection from '@pages/match/create/components/match-card-section';
import useMatchCreate from '@pages/match/hooks/use-mate-create';
import { ROUTES } from '@routes/routes-config';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';

const Create = () => {
  const [searchParams] = useSearchParams();
  const matchType = (searchParams.get('type') as 'single' | 'group') || 'single';
  const { matchId } = useParams();
  const numericMatchId = Number(matchId) || 1;
  const { matchData } = useMatchCreate(numericMatchId, matchType);

  if (isInvalidMatchId(matchId?.toString())) {
    return <Navigate to={ROUTES.ERROR} replace />;
  }

  return (
    <div className="h-full flex-col-between gap-[2.4rem] px-[1.6rem] pt-[9.6rem]">
      <main className="w-full flex-col-center gap-[4rem]">
        <Header nickname={matchData?.nickname || ''} />
        {matchData && <MatchCardSection matchData={matchData} />}
      </main>
      <ButtonSection matchType={matchType} />
    </div>
  );
};

export default Create;
