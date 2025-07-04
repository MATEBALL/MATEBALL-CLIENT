import type { ReactNode } from 'react';

interface DialogProps {
  ment?: string;
  children?: ReactNode;
}
const Dialog = ({ ment, children }: DialogProps) => {
  return (
    <div>
      <p>{ment}</p>
      {children}
    </div>
  );
};

export default Dialog;
