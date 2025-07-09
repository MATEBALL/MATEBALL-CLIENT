import { buttonGameVariants } from '@components/button/button-game/styles/button-game-variants';
import ChipInfo from '@components/chip/chip-info';
import { cn } from '@libs/cn';
import { useState } from 'react';

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
        <ChipInfo icon="ic-clock" size={1.85} text={gameTime} iconColor="text-gray-500" />
        <ChipInfo icon="ic-location" size={1.6} text={stadium} iconColor="text-gray-500" />
      </span>
    </button>
  );
};

export default ButtonGame;
