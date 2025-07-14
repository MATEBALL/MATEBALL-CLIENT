import { authQueries } from '@apis/auth/auth';
import { useQuery } from '@tanstack/react-query';
import type { getUserStatusResponse } from '@/shared/types/auth-types';

const useAuth = () => {
  const { data, isLoading, isError } = useQuery<getUserStatusResponse>(authQueries.USER_STATUS());

  const isAuthenticated = !!data?.nickname;
  const isNotMatched = data?.condition === false;

  return { isAuthenticated, isLoading, isError, isNotMatched };
};

export default useAuth;
