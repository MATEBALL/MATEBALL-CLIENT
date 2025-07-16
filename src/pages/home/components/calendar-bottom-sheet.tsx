import BottomSheet from '@components/bottom-sheet/bottom-sheet';
import Button from '@components/button/button/button';
import MonthCalendar from '@components/calendar/month-calendar';

interface CalendarBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  onWeekChange: (date: Date) => void;
}

const CalendarBottomSheet = ({
  isOpen,
  onClose,
  selectedDate,
  onDateSelect,
  onWeekChange,
}: CalendarBottomSheetProps) => {
  const handleDateConfirm = () => {
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="p-[1.6rem]">
        <MonthCalendar
          value={selectedDate}
          selectedDate={selectedDate}
          onWeekChange={onWeekChange}
          onMonthChange={onDateSelect}
        />
      </div>
      <div className="p-[1.6rem]">
        <Button label="날짜 선택하기" size="L" className="w-full" onClick={handleDateConfirm} />
      </div>
    </BottomSheet>
  );
};

export default CalendarBottomSheet;
