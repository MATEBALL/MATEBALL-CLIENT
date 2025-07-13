import MatchingAgreeView from '@pages/result/components/matching-agree-view';
import MatchingFailView from '@pages/result/components/matching-fail-view';
import MatchingReceiveView from '@pages/result/components/matching-receive-view';
import MatchingSuccessView from '@pages/result/components/matching-success-view';
import MatchingReceiveView from '@pages/result/components/matching-receive-view';
import SentView from '@pages/result/components/sent-view';
import { ROUTES } from '@routes/routes-config';
import { Navigate, useSearchParams } from 'react-router-dom';

const ResultPage = () => {
  const [params] = useSearchParams();
  const type = params.get('type');
  const mode = params.get('mode');
  const isGroupMatching = mode?.toLowerCase() === 'group';

  if (type === 'sent') {
    return <SentView isGroupMatching={isGroupMatching} />;
  }

  if (type === 'success') {
    return <MatchingSuccessView isGroupMatching={isGroupMatching} />;
  }

  if (type === 'agree') {
    return <MatchingAgreeView />;
  }

  if (type === 'fail') {
    return <MatchingFailView />;
  }

  if (type === 'received') {
    return <MatchingReceiveView isGroupMatching={isGroupMatching} />;
  }

  return <Navigate to={ROUTES.ERROR} replace />;
};

export default ResultPage;
