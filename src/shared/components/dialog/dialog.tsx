import type { ReactNode } from 'react';

interface DialogProps {
  info?: ReactNode;
  children?: ReactNode;
}
const Dialog = ({ info, children }: DialogProps) => {
  return (
    <div className="w-[34.3rem] flex-col-center rounded-[1.6rem] bg-gray-white px-[3.2rem] pt-[4rem] pb-[3.2rem] shadow-1">
      <p className="subhead_18_sb text-center">{info}</p>
      {children}
    </div>
  );
};

export default Dialog;
