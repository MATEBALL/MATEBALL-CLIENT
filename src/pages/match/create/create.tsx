import { matchQueries } from '@apis/match/match-queries';
import ButtonSection from '@pages/match/create/components/button-section';
import MatchCardSection from '@pages/match/create/components/match-card-section';
import MatchGuideSection from '@pages/match/create/components/match-guide-section';
import useMatchCreate from '@pages/match/hooks/use-mate-create';
import { isInvalidMatchId } from '@pages/match/utils/match-validators';
import { ROUTES } from '@routes/routes-config';
//import { useQuery } from '@tanstack/react-query';
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
  const id = 55;
  //const { data } = useQuery(matchQueries.SINGLE_MATCH_RESULT(id));
  //console.log(data);

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
