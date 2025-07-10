import SentView from '@pages/result/components/SentView';
import { useSearchParams } from 'react-router-dom';

export default function ResultPage() {
  const [params] = useSearchParams();
  const type = params.get('type');

  if (type === 'sent') return <SentView />;
  return <div>잘못된 접근입니다</div>;
}
