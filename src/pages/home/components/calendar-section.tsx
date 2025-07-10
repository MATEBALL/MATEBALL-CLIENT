import { WEEK_CALENDAR_START_OFFSET } from '@components/calendar/constants/CALENADAR';
import { getInitialSelectedDate } from '@components/calendar/utils/date-grid';
import WeekCalendar from '@components/calendar/week-calendar';
import Icon from '@components/icon/icon';
import BarTabList from '@components/tab/tab/tab-list';
import type { TabType } from '@hooks/use-tab-state';
import { addDays } from 'date-fns';
import { useState } from 'react';

interface CalendarSectionProps {
  activeType: TabType;
  onTabChange: (type: TabType) => void;
}

const CalendarSection = ({ activeType, onTabChange }: CalendarSectionProps) => {
  const entryDate = new Date();
  const initialSelectedDate = getInitialSelectedDate(entryDate);
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [baseWeekDate, setBaseWeekDate] = useState(
    addDays(initialSelectedDate, WEEK_CALENDAR_START_OFFSET),
  );

  //임시용 탭 변경 핸들러 추후 월간 캘린더랑 연결 예정
  const handleTabChange = (type: TabType) => {
    setBaseWeekDate(addDays(selectedDate, WEEK_CALENDAR_START_OFFSET));
    onTabChange(type);
  };

  return (
    <section className="sticky top-[5.6rem] z-10 bg-black px-[1.6rem] pt-[2.4rem]">
      <WeekCalendar
        baseDate={baseWeekDate}
        value={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
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
