
import WeekCalendar from '@components/calendar/week-calendar';
import Icon from '@components/icon/icon';
import BarTabList from '@components/tab/tab/tab-list';
import type { TabType } from '@hooks/use-tab-state';

interface CalendarSectionProps {
  activeType: TabType;
  onTabChange: (type: TabType) => void;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  baseWeekDate: Date;
}

const CalendarSection = ({ activeType, onTabChange, selectedDate, onDateChange, baseWeekDate }: CalendarSectionProps) => {

 
  const handleTabChange = (type: TabType) => {
    onDateChange(selectedDate);
    onTabChange(type);
  };

  return (
    <section className="sticky top-[5.6rem] z-10 bg-black px-[1.6rem] pt-[2.4rem]">
      <WeekCalendar
        baseDate={baseWeekDate}
        value={selectedDate}
        onChange={(date) => {
          onDateChange(date);
        }}
      />
      <div className="mt-[3.5rem] flex justify-between">
        <BarTabList colorMode="dark" activeType={activeType} onTabChange={handleTabChange} />
        <div className="h-[3.2rem] w-[3.2rem] flex-col-center rounded-[8px] bg-gray-900">
          <Icon name="ic-calendar" size={2.4} className="text-gray-white" />
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
