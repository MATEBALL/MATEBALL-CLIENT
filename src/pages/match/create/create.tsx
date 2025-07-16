import ButtonSection from '@pages/match/create/components/button-section';
import MatchCardSection from '@pages/match/create/components/match-card-section';
<<<<<<< HEAD
import MatchGuideSection from '@pages/match/create/components/match-guide-section';
import useMatchCreate from '@pages/match/hooks/use-mate-create';
=======
>>>>>>> 8ec3b46 (feat: 빌드 에러 해결 (#197))
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
  const { matchData } = useMatchCreate(numericMatchId, matchType);

  if (!matchData || isInvalidMatchId(matchId?.toString()) || !matchType) {
    return <Navigate to={ROUTES.ERROR} replace />;
  }

  return (
    <div className="h-svh flex-col-between gap-[2.4rem] px-[1.6rem] pt-[9.6rem]">
      <div className="w-full flex-col-center gap-[4rem]">
        <MatchGuideSection nickname={matchData.nickname} />
        <MatchCardSection matchData={matchData} />
      </div>
      <ButtonSection matchType={matchType} />
    </div>
  );
};

export default Create;