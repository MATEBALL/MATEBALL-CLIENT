import ErrorView from '@pages/error/error-view';
import MatchingAgreeView from '@pages/result/components/matching-agree-view';
import MatchingCreatedView from '@pages/result/components/matching-created-view';
import MatchingFailView from '@pages/result/components/matching-fail-view';
import MatchingReceiveView from '@pages/result/components/matching-receive-view';
import SentView from '@pages/result/components/sent-view';
import { ROUTES } from '@routes/routes-config';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';

const ResultPage = () => {
  const { matchId } = useParams();
  const [params] = useSearchParams();

  const type = params.get('type');

  if (!type || !matchId) {
    return <ErrorView />;
  }

  if (type === 'sent') {
    return <SentView />;
  }

  if (type === 'success') {
    return <MatchingCreatedView />;
  }

  if (type === 'agree') {
    return <MatchingAgreeView matchId={matchId} />;
  }

  if (type === 'fail') {
    return <MatchingFailView />;
  }

  if (type === 'received') {
    return <MatchingReceiveView />;
  }

  return <Navigate to={ROUTES.ERROR} replace />;
};

export default ResultPage;
