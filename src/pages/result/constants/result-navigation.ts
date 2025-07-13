import { ROUTES } from '@routes/routes-config';
import { useNavigate } from 'react-router-dom';

export const useNavigationHandlers = () => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate(ROUTES.HOME);
  const handleGoMatch = () => navigate(ROUTES.MATCH);
  const handleGoBack = () => navigate(-1);

  return {
    handleGoHome,
    handleGoMatch,
    handleGoBack,
  };
};
