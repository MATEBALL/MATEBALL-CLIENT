import WeekCalendar from '@components/calendar/week-calendar';
import type { TabType } from '@components/tab/tab/constants/tab-type';
import CalendarButton from '@pages/home/components/calendar-button';

interface CalendarSectionProps {
  activeType: TabType;
  onTabChange: (type: TabType) => void;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  baseWeekDate: Date;
  onOpenBottomSheet: () => void;
  onWeekChange: (direction: 'prev' | 'next') => void;
  entryDate: Date;
}

const CalendarSection = ({
  selectedDate,
  onDateChange,
  baseWeekDate,
  onOpenBottomSheet,
  onWeekChange,
  entryDate,
}: CalendarSectionProps) => {
  return (
    <section className="sticky top-0 z-[var(--z-under-header-section)] flex-col gap-[0.4rem] bg-gray-black px-[1.6rem] pt-[2.4rem] pb-[2.4rem]">
      <div className="h-[5.6rem] flex-row-between">
        <p className="head_20_sb text-gray-white">다가오는 경기 일정</p>
        <CalendarButton onOpenBottomSheet={onOpenBottomSheet} />
      </div>

      <WeekCalendar
        entryDate={entryDate}
        baseDate={baseWeekDate}
        value={selectedDate}
        onChange={(date) => {
          onDateChange(date);
        }}
        onWeekChange={onWeekChange}
      />
    </section>
  );
};

export default CalendarSection;
