import ChipInfoItem from '@components/chip/chip-info/chip-info-item';
import { formatDate } from '@components/chip/chip-info/utils/format-date';

interface ChipInfoBarProps {
  awayTeam: string;
  homeTeam: string;
  location: string;
  date: string;
}

const ChipInfoBar = ({ awayTeam, homeTeam, location, date }: ChipInfoBarProps) => {
  return (
    <div className="flex items-center">
      <ChipInfoItem iconName="ic-baseball" text={`${awayTeam} vs ${homeTeam}`} />
      <ChipInfoItem iconName="ic-location" text={location} />
      <ChipInfoItem iconName="ic-calendar" text={formatDate(date)} />
    </div>
  );
};

export default ChipInfoBar;
