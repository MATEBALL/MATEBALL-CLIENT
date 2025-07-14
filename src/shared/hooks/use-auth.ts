import { userQueries } from '@apis/user/user-queries';
import { useQuery } from '@tanstack/react-query';

const useAuth = () => {
  const { data, isLoading, isError } = useQuery(userQueries.USER_INFO());

  const isAuthenticated = !!data?.nickname;
  const needsSignup = data && data.nickname === null;

  return {
    isAuthenticated,
    isLoading,
    isError,
    needsSignup,
  };
};

export default useAuth;
