import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';
import type { ReactNode } from 'react';

interface CheckboxProps {
  label: ReactNode;
  checked: boolean;
  onClick: () => void;
  svg?: ReactNode;
  divider?: boolean;
  className?: string;
  link?: string;
}

const CheckboxRow = ({ label, checked, onClick, svg, divider, className, link }: CheckboxProps) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-between gap-[0.8rem] p-[0.8rem] px-[1.6rem] text-left',
        divider && 'border-gray-200 border-b',
        className,
      )}
    >
      <div className="flex items-center gap-[0.8rem]">
        <button type="button" className="cursor-pointer" onClick={onClick}>
          <Icon name="check-filled" className={checked ? 'text-main-800' : 'text-gray-300'} />
        </button>
        <span className="body_16_m">{label}</span>
      </div>
      <a href={link} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
        {svg}
      </a>
    </div>
  );
};

export default CheckboxRow;
