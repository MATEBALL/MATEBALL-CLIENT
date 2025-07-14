import { postKakaoLogin } from '@apis/auth/auth';
import { get } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { HTTP_STATUS } from '@constants/response';
import { ROUTES } from '@routes/routes-config';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { getUserStatusResponse } from '@/shared/types/auth-types';

export const LoginCallback = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      if (!code) {
        console.error('인가 코드 없음');
        navigate(ROUTES.ERROR);
        return;
      }

      try {
        const loginRes = await postKakaoLogin(code);

        if (loginRes.status === HTTP_STATUS.OK) {
          const userInfo = await get<getUserStatusResponse>(END_POINT.GET_USER_STATUS);

          if (userInfo.nickname === false) {
            navigate(ROUTES.SIGNUP);
          } else if (userInfo.nickname === true) {
            navigate(ROUTES.HOME);
          }
        } else {
          console.error('로그인 실패');
          navigate(ROUTES.ERROR);
        }
      } catch (err) {
        console.error('카카오 로그인 실패', err);
        navigate(ROUTES.ERROR);
      }
    };

    handleLogin();
  }, [code, navigate]);

  return null;
};
