import MatchingWaitingView from '@pages/result/components/matching-agree-view';
import MatchingFailView from '@pages/result/components/matching-fail-view';
import MatchingSuccessView from '@pages/result/components/matching-success-view';
import SentView from '@pages/result/components/sent-view';
import { useSearchParams } from 'react-router-dom';

const ResultPage = () => {
  const [params] = useSearchParams();
  const type = params.get('type');
  const mode = params.get('mode');

  // TODO: 실제 유저 정보에서 받아올 것
  const userNickname = '두밥비';

  if (type === 'sent') {
    const isGroupMatching = mode?.toLowerCase() === 'group';
    return <SentView isGroupMatching={isGroupMatching} userNickname={userNickname} />;
  }

  if (type === 'success') {
    return <MatchingSuccessView />;
  }

  if (type === 'agree') {
    return <MatchingWaitingView />;
  }

  if (type === 'fail') {
    return <MatchingFailView />;
  }

  return <div>잘못된 접근입니다</div>;
};

export default ResultPage;
