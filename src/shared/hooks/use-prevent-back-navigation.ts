import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePreventBackNavigation = (redirectUrl: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate(redirectUrl, { replace: true });
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate, redirectUrl]);
};

export default usePreventBackNavigation;
