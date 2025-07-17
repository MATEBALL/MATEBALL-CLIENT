import { authQueries } from '@apis/auth/auth';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const useAuth = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(authQueries.USER_STATUS());

  const isAuthenticated = !!data?.nickname;
  const isNotMatched = data?.condition === false;

  const needsMatchingSetup = isAuthenticated && isNotMatched;

  const refreshUserStatus = () => {
    queryClient.invalidateQueries({ queryKey: authQueries.USER_STATUS().queryKey });
  };

  return {
    isAuthenticated,
    isNotMatched,
    needsMatchingSetup,
    refreshUserStatus,
    isAuthLoading: isLoading,
  };
};

export default useAuth;
