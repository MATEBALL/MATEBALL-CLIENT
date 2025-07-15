import { authQueries } from '@apis/auth/auth';
import { useSuspenseQuery } from '@tanstack/react-query';

const useAuth = () => {
  const { data } = useSuspenseQuery(authQueries.USER_STATUS());

  const isAuthenticated = !!data?.nickname;
  const isNotMatched = data?.condition === false;

  return { isAuthenticated, isNotMatched };
};

export default useAuth;
