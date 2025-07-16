import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Button from '@components/button/button/button';
import MonthCalendar from '@components/calendar/month-calendar';
import { useEffect, useState } from 'react';

interface CalendarBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const CalendarBottomSheet = ({
  isOpen,
  onClose,
  selectedDate,
  onDateSelect,
}: CalendarBottomSheetProps) => {
  const [localSelectedDate, setLocalSelectedDate] = useState(selectedDate);

  useEffect(() => {
    if (isOpen) {
      setLocalSelectedDate(selectedDate);
    }
  }, [selectedDate, isOpen]);

  const handleDateConfirm = () => {
    onDateSelect(localSelectedDate);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="p-[1.6rem]">
        <MonthCalendar
          value={localSelectedDate}
          selectedDate={localSelectedDate}
          onWeekChange={setLocalSelectedDate}
          onMonthChange={setLocalSelectedDate}
        />
      </div>
      <div className="p-[1.6rem]">
        <Button label="날짜 선택하기" size="L" className="w-full" onClick={handleDateConfirm} />
      </div>
    </BottomSheet>
  );
};

export default CalendarBottomSheet;
