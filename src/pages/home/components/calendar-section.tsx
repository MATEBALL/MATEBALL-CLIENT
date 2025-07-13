import WeekCalendar from '@components/calendar/week-calendar';
import type { TabType } from '@components/tab/tab/constants/tab-type';
import TabList from '@components/tab/tab/tab-list';
import CalendarButton from '@pages/home/components/calendar-button';

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
    onTabChange(type);
  };

  return (
    <section className="sticky top-[5.6rem] z-[var(--z-home-calendar-section)] bg-gray-black px-[1.6rem] pt-[2.4rem]">
      <WeekCalendar
        baseDate={baseWeekDate}
        value={selectedDate}
        onChange={(date) => {
          onDateChange(date);
        }}
      />
      <section className="mt-[3.5rem] flex justify-between">
        <TabList colorMode="home" activeType={activeType} onTabChange={handleTabChange} />
        <CalendarButton onOpenBottomSheet={onOpenBottomSheet} />
      </section>
    </section>
  );
};

export default CalendarSection;
