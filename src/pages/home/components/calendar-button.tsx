import Icon from '@components/icon/icon';

interface CalendarButtonProps {
  onOpenBottomSheet: () => void;
}

const CalendarButton = ({ onOpenBottomSheet }: CalendarButtonProps) => {
  return (
    <button
      type="button"
      className="flex h-[3.2rem] flex-row-center cursor-pointer gap-[0.8rem] rounded-[8px] bg-gray-900 p-[0.8rem]"
      onClick={onOpenBottomSheet}
    >
      <Icon name="calendar" size={2.4} className="text-gray-white" />
      <h1 className="cap_14_sb text-gray-white">날짜 선택</h1>
    </button>
  );
};

export default CalendarButton;
