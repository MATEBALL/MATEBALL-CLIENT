import { userQueries } from '@apis/user/user-queries'
import { useQuery } from '@tanstack/react-query'

const useAuth = () => {
  const {data, isLoading, isError} = useQuery(userQueries.USER_INFO());

  const isAuthenticated = !!data?.nickname;

    return {
    isAuthenticated,
    isLoading,
    isError,
  };
}

export default useAuth
