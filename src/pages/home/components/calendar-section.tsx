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
  onOpenBottomSheet: () => void;
}

const CalendarSection = ({
  activeType,
  onTabChange,
  selectedDate,
  onDateChange,
  baseWeekDate,
  onOpenBottomSheet,
}: CalendarSectionProps) => {
  const handleTabChange = (type: TabType) => {
    onDateChange(selectedDate);
    onTabChange(type);
  };

  return (
    <section className="sticky top-[5.6rem] z-10 bg-gray-black px-[1.6rem] pt-[2.4rem]">
      <WeekCalendar
        baseDate={baseWeekDate}
        value={selectedDate}
        onChange={(date) => {
          onDateChange(date);
        }}
      />
      <section className="mt-[3.5rem] flex justify-between">
        <BarTabList colorMode="dark" activeType={activeType} onTabChange={handleTabChange} />
        <button
          type="button"
          className="h-[3.2rem] w-[3.2rem] flex-col-center rounded-[8px] bg-gray-900"
          onClick={onOpenBottomSheet}
        >
          <Icon name="ic-calendar" size={2.4} className="cursor-pointer text-gray-white" />
        </button>
      </section>
    </section>
  );
};

export default CalendarSection;
