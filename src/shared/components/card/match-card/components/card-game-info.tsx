import type { CardGameInfoProps } from '@components/card/match-card/types/card';
import ChipInfo from '@components/chip/chip-info';
import { cn } from '@libs/cn';
import { formatDate } from '@pages/match/utils/format-date';

const CardGameInfo = ({ awayTeam, homeTeam, stadium, date, className }: CardGameInfoProps) => {
  return (
    <div
      className={cn('cap_12_m flex items-center gap-[0.8rem] py-[0.4rem] text-gray-600', className)}
    >
      <ChipInfo icon="baseball" text={`${awayTeam} VS ${homeTeam}`} size={1.6} />
      <ChipInfo icon="location" text={stadium} size={1.6} />
      <ChipInfo icon="calendar" text={formatDate(date)} size={1.6} />
    </div>
  );
};

export default CardGameInfo;
