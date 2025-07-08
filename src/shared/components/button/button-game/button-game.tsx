import { buttonGameVariants } from '@components/button/button-game/styles/button-game-variants';
import { cn } from '@libs/cn';
import { useState } from 'react';
import ChipInfo from './components/chip-info';

interface ButtonGameProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  gameTime: string;
  stadium: string;
  awayTeam: string;
  homeTeam: string;
}

const ButtonGame = ({
  onClick,
  className,
  ariaLabel,
  gameTime,
  stadium,
  awayTeam,
  homeTeam,
}: ButtonGameProps) => {
  const [variant, setVariant] = useState<'selected' | 'default'>('default');

  const handleClick = () => {
    setVariant((prev) => (prev === 'default' ? 'selected' : 'default'));
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel ?? `${awayTeam} VS ${homeTeam}`}
      className={cn(buttonGameVariants({ variant }), className, 'flex-row-between')}
    >
      <span>
        {awayTeam} VS {homeTeam}
      </span>
      <span className="flex-row-center gap-[0.4rem] text-gray-600">
        <ChipInfo icon="ic-clock" text={gameTime} iconColor="text-gray-500" />
        <ChipInfo icon="ic-location" text={stadium} iconColor="text-gray-500" />
      </span>
    </button>
  );
};

export default ButtonGame;
