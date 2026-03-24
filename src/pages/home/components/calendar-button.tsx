import Icon from '@components/icon/icon';

interface CalendarButtonProps {
  onOpenBottomSheet: () => void;
}

const CalendarButton = ({ onOpenBottomSheet }: CalendarButtonProps) => {
  return (
    <button
      type="button"
      className="h-[3.2rem] flex-row-center cursor-pointer gap-[0.8rem] rounded-[8px]p-[0.8rem]"
      onClick={onOpenBottomSheet}
    >
      <Icon name="calendar" size={2.4} className="text-gray-200" />
      <h1 className="cap_14_sb text-gray-200">전체보기</h1>
    </button>
  );
};

export default CalendarButton;
