import { authQueries } from '@apis/auth/auth';
import { useQuery } from '@tanstack/react-query';

const useAuth = () => {
  const { data, isLoading, isError } = useQuery(authQueries.USER_STATUS());

  const isAuthenticated = !!data?.nickname;

  // TODO: 로그인한 유저가 홈에 왔는데 매칭 조건 설정 전이면 false
  // 이 false 값을 가지고 홈 불투명한거 처리해주세요
  const isNotMatched = data?.condition === false;

  return {
    isAuthenticated,
    isLoading,
    isError,
    isNotMatched,
  };
};

export default useAuth;
