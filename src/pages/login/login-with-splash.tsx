import Splash from '@pages/login/components/splash';
import Login from '@pages/login/login';
import { useEffect, useState } from 'react';

const LoginWithSplash = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <Splash />;

  return <Login />;
};

export default LoginWithSplash;
