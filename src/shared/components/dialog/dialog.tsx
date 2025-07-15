import Button from '@components/button/button/button';
import { ROUTES } from '@routes/routes-config';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface DialogProps {
  info?: ReactNode;
  children?: ReactNode;
}
const Dialog = ({ info }: DialogProps) => {
  const navigate = useNavigate();
  const handleComplete = () => {
    navigate(ROUTES.ONBOARDING);
  };

  return (
    <div className="w-[34.3rem] flex-col-center gap-[2rem] rounded-[16px] bg-gray-white p-[4rem_3.2rem_3.2rem] shadow-1">
      <p className="subhead_18_sb text-center">{info}</p>
      <Button label="최초 매칭 조건 설정" onClick={handleComplete} />
    </div>
  );
};

export default Dialog;
