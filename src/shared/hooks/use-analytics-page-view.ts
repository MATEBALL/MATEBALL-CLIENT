import { sendPageView } from '@libs/analytics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAnalyticsPageView = () => {
  const loc = useLocation();

  useEffect(() => {
    sendPageView({
      path: loc.pathname + loc.search,
      title: typeof document !== 'undefined' ? document.title : undefined,
      location: typeof window !== 'undefined' ? window.location.href : undefined,
    });
  }, [loc.pathname, loc.search]);
};

export default useAnalyticsPageView;
