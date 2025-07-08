import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';
import { buttonGameVariants } from './styles/button-game-variants';

interface ButtonGameProps {
  label: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  variant: 'blue' | 'white';
  time: string;
  location: string;
}

const ButtonGame = ({
  label,
  onClick,
  className,
  ariaLabel,
  variant,
  time,
  location,
}: ButtonGameProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      className={cn(buttonGameVariants({ variant }), className, 'flex-row-between')}
    >
      <span>{label}</span>
      <span className="flex-row-center gap-[0.4rem] text-gray-600">
        <Icon name="ic-clock" width={1.6} height={1.6} className="text-gray-500" />
        {time}
        <Icon name="ic-location" width={1.6} height={1.6} className="ml-[0.4rem] text-gray-500" />
        {location}
      </span>
    </button>
  );
};

export default ButtonGame;
