import type { ReactNode } from 'react';

interface DialogProps {
  info?: ReactNode;
  children?: ReactNode;
}
const Dialog = ({ info, children }: DialogProps) => {
  return (
    <div className="w-[34.3rem] flex-col-center gap-[2rem] rounded-[16px] bg-gray-white p-[4rem_3.2rem_3.2rem] shadow-1">
      <p className="subhead_18_sb text-center">{info}</p>
      {children}
    </div>
  );
};

export default Dialog;
