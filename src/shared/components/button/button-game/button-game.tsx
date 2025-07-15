import { buttonGameVariants } from '@components/button/button-game/styles/button-game-variants';
import ChipInfo from '@components/chip/chip-info';
import { cn } from '@libs/cn';

interface ButtonGameProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  gameTime: string;
  stadium: string;
  awayTeam: string;
  homeTeam: string;
  selected?: boolean;
}

const ButtonGame = ({
  onClick,
  className,
  ariaLabel,
  gameTime,
  stadium,
  awayTeam,
  homeTeam,
  selected = false,
}: ButtonGameProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? `${awayTeam} VS ${homeTeam}`}
      className={cn(
        buttonGameVariants({ variant: selected ? 'selected' : 'default' }),
        className,
        'flex-row-between',
      )}
    >
      <span>
        {awayTeam} VS {homeTeam}
      </span>
      <span className="flex-row-center gap-[0.4rem] text-gray-600">
        <ChipInfo icon="clock" size={1.85} text={gameTime} iconColor="text-gray-500" />
        <ChipInfo icon="location" size={1.6} text={stadium} iconColor="text-gray-500" />
      </span>
    </button>
  );
};

export default ButtonGame;
