import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';
import type { CardGameInfoProps } from '../types/card';

const CardGameInfo = ({ teams, location, date, className }: CardGameInfoProps) => {
  return (
    <div
      className={cn('cap_12_m flex items-center gap-[0.8rem] py-[0.4rem] text-gray-600', className)}
    >
      <span className="flex items-center gap-[0.4rem]">
        <Icon name="ic-baseball" size={1.6} /> {teams}
      </span>
      <span className="flex items-center gap-[0.4rem]">
        <Icon name="ic-location" size={1.6} /> {location}
      </span>
      <span className="flex items-center gap-[0.4rem]">
        <Icon name="ic-calendar" size={1.6} /> {date}
      </span>
    </div>
  );
};

export default CardGameInfo;
