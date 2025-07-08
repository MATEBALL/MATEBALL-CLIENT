import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';

interface ButtonCreateProps {
  label: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  textColor?: string;
}

const ButtonCreate = ({
  label,
  onClick,
  className,
  ariaLabel,
  textColor = 'text-main-900',
}: ButtonCreateProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      className={cn(
        'cap_14_sb flex-row-center cursor-pointer gap-[0.8rem] rounded-[8px] bg-gray-white px-[1.2rem] py-[0.8rem] opacity-80 transition-colors',
        textColor,
        className,
      )}
    >
      <Icon name="ic-plus" width={1.6} height={1.6} />
      {label}
    </button>
  );
};

export default ButtonCreate;
