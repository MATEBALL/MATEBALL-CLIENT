import { useEffect } from 'react';

export const useKakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (code) {
      // TODO, api 연결
    }
  }, [code]);
};
