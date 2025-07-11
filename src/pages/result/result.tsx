import SentView from '@pages/result/components/SentView';
import { useSearchParams } from 'react-router-dom';

const ResultPage = () => {
  const [params] = useSearchParams();
  const type = params.get('type');
  const mode = params.get('mode');

  if (type === 'sent') {
    const isGroupMatching = mode?.toLowerCase() === 'group';
    // TODO: 실제 유저 정보에서 가져오기
    const userNickname = '두밥비';
    return <SentView isGroupMatching={isGroupMatching} userNickname={userNickname} />;
  }

  if (type === 'success') {
  return <>매칭 성공 화면</>;
  }

  if (type === 'fail') {
  return <>매칭 실패 화면</>;
  }

  return <div>잘못된 접근입니다</div>;
};

export default ResultPage;
