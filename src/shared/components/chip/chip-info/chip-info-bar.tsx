import type { FC } from 'react';
import ChipInfo from '@components/chip/chip-info/chip-info-item';

interface ChipInfoBarProps {
  awayTeam: string;
  homeTeam: string;
  location: string;
  date: string;
}

const ChipInfoBar: FC<ChipInfoBarProps> = ({ awayTeam, homeTeam, location, date }) => {
  return (
    <div className="flex items-center">
      <ChipInfo iconId="ic-baseball" text={`${awayTeam} vs ${homeTeam}`} />
      <ChipInfo iconId="ic-location" text={location} />
      <ChipInfo iconId="ic-calendar" text={date} />
    </div>
  );
};

export default ChipInfoBar;
