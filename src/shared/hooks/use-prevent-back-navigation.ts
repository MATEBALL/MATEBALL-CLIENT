import { useEffect } from 'react';

const usePreventBackNavigation = (redirectUrl?: string) => {
  useEffect(() => {
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);

      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [redirectUrl]);
};

export default usePreventBackNavigation;
