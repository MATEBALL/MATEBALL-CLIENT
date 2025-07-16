import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePreventBackNavigation = (redirectUrl?: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);

      if (redirectUrl) {
        navigate(redirectUrl, { replace: true });
      }
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [redirectUrl, navigate]);
};

export default usePreventBackNavigation;
