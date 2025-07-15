import Icon from '@components/icon/icon';
import { ROUTES } from '@routes/routes-config';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.LOGIN);
    }, 1100);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="h-full w-full flex-col-center bg-main-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.3, ease: 'easeOut' }}
    >
      <Icon name="logo" width={19} height={5.3} />
    </motion.div>
  );
};

export default Splash;
