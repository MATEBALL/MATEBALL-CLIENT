import ChipInfo from '@components/chip/chip-info/chip-info-item';

interface ChipInfoListProps {
  awayTeam: string;
  homeTeam: string;
  location: string;
  date: string;
}

const ChipInfoList = ({ awayTeam, homeTeam, location, date }: ChipInfoListProps) => {
  return (
    <div className="flex items-center">
      <ChipInfo iconName="ic-baseball" text={`${awayTeam} vs ${homeTeam}`} />
      <ChipInfo iconName="ic-location" text={location} />
      <ChipInfo iconName="ic-calendar-16" text={date} />
    </div>
  );
};

export default ChipInfoList;
