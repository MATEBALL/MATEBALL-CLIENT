import Loading from '@pages/loading/loading';
import { isInvalidMatchId } from '@pages/match/constants/matching';
import ButtonSection from '@pages/match/create/components/button-section';
import Header from '@pages/match/create/components/header';
import MatchCardSection from '@pages/match/create/components/match-card-section';
import useMatchCreate, { type MatchCardData } from '@pages/match/hooks/useMateCreate';
import { ROUTES } from '@routes/routes-config';
import { Navigate, useSearchParams } from 'react-router-dom';

const Create = () => {
  const [searchParams] = useSearchParams();
  const matchType = (searchParams.get('type') || 'single') as 'single' | 'group';
  //const { matchId } = useParams();
  const matchId = 1; //api 연동 후 삭제될 부분
  const numericMatchId = Number(matchId) || 1;
  const { matchData, loading } = useMatchCreate(numericMatchId, matchType);

  if (loading) {
    return (
      <div className="h-full flex-col-center gap-[2.4rem] px-[1.6rem] pt-[9.6rem]">
        <p className="body_16_m text-gray-600">
          <Loading />
        </p>
      </div>
    );
  }

  if (isInvalidMatchId(matchId?.toString())) {
    return <Navigate to={ROUTES.ERROR} replace />;
  }

  return (
    <div className="h-full flex-col-between gap-[2.4rem] px-[1.6rem] pt-[9.6rem]">
      <main className="w-full flex-col-center gap-[4rem]">
        <Header nickname={matchData?.nickname || ''} />
        <MatchCardSection matchData={matchData as MatchCardData} />
      </main>
      <ButtonSection matchType={matchType} />
    </div>
  );
};

export default Create;
