import Icon from '@components/Icon';
import { cn } from '@libs/cn';

interface ButtonCreateProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const ButtonCreate = ({ label, onClick, disabled, className, ariaLabel }: ButtonCreateProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      className={cn(
        'cap_14_sb flex h-[3.7rem] items-center justify-center gap-[0.8rem] rounded-[0.8rem] bg-gray-white px-[1.2rem] text-main-900 opacity-80 transition-colors',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <Icon name="ic-plus" size={1.6} />
      {label}
    </button>
  );
};

export default ButtonCreate;
