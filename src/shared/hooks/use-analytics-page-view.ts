import { sendPageView } from '@libs/analytics';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useAnalyticsPageView = () => {
  const loc = useLocation();
  const initialViewSentRef = useRef(false);

  useEffect(() => {
    if (!initialViewSentRef.current) {
      initialViewSentRef.current = true;
      return;
    }

    sendPageView({
      path: loc.pathname + loc.search,
      title: typeof document !== 'undefined' ? document.title : undefined,
      location: typeof window !== 'undefined' ? window.location.href : undefined,
    });
  }, [loc.pathname, loc.search]);
};

export default useAnalyticsPageView;
