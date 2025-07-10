<<<<<<< HEAD
import ChipInfo from '@components/button/button-game/components/chip-info';
=======
import type { CardGameInfoProps } from '@components/card/match-card/types/card';
import ChipInfo from '@components/chip/chip-info';
>>>>>>> e3d00c0 (fix: card 코드리뷰 반영(#49))
import { cn } from '@libs/cn';
import type { CardGameInfoProps } from '../types/card';

const CardGameInfo = ({ awayTeam, homeTeam, stadium, date, className }: CardGameInfoProps) => {
  return (
    <div
      className={cn('cap_12_m flex items-center gap-[0.8rem] py-[0.4rem] text-gray-600', className)}
    >
      <ChipInfo icon="ic-baseball" text={`${awayTeam} VS ${homeTeam}`} size={1.6} />
      <ChipInfo icon="ic-location" text={stadium} size={1.6} />
      <ChipInfo icon="ic-calendar" text={date} size={1.6} />
    </div>
  );
};

export default CardGameInfo;
