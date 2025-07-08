import { getKakaoLogin } from '@apis/auth';
import { useEffect } from 'react';

export const LoginCallback = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  useEffect(() => {
    if (code) {
      getKakaoLogin(code)
        .then((res) => {
          console.log('카카오 로그인 성공', res);
        })
        .catch((err) => {
          console.error('카카오 로그인 실패', err);
        });
    }
  }, [code]);

  return null;
};
