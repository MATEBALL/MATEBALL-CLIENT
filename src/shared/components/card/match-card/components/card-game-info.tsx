import ChipInfo from '@components/button/button-game/components/chip-info';
import { cn } from '@libs/cn';
import type { CardGameInfoProps } from '../types/card';

const CardGameInfo = ({ awayTeam, homeTeam, stadium, date, className }: CardGameInfoProps) => {
  return (
    <div
      className={cn('cap_12_m flex items-center gap-[0.8rem] py-[0.4rem] text-gray-600', className)}
    >
      <ChipInfo icon="ic-baseball" text={`${awayTeam} VS ${homeTeam}`} />
      <ChipInfo icon="ic-location" text={stadium} />
      <ChipInfo icon="ic-calendar" text={date} />
    </div>
  );
};

export default CardGameInfo;
