import ButtonSection from '@pages/match/create/components/button-section';
import MatchCardSection from '@pages/match/create/components/match-card-section';
import MatchGuideSection from '@pages/match/create/components/match-guide-section';
import useMatchCreate from '@pages/match/hooks/use-mate-create';
import { isInvalidMatchId } from '@pages/match/utils/match-validators';
import { ROUTES } from '@routes/routes-config';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';

const Create = () => {
  const [searchParams] = useSearchParams();
  const matchType = searchParams.get('type') === 'group' ? 'group' : 'single';
  const { matchId } = useParams();
  const numericMatchId = Number(matchId);
  const { matchData } = useMatchCreate(numericMatchId, matchType);

  if (isInvalidMatchId(matchId?.toString())) {
    return <Navigate to={ROUTES.ERROR} replace />;
  }

  return (
    <div className="h-full flex-col-between gap-[2.4rem] px-[1.6rem] pt-[9.6rem]">
      <div className="w-full flex-col-center gap-[4rem]">
        <MatchGuideSection nickname={matchData?.nickname || ''} />
        {matchData && <MatchCardSection matchData={matchData} />}
      </div>
      <ButtonSection matchType={matchType} />
    </div>
  );
};

export default Create;
