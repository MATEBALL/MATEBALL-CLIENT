import Icon from '@components/icon/icon';

interface CalendarButtonProps {
  onOpenBottomSheet: () => void;
}

const CalendarButton = ({ onOpenBottomSheet }: CalendarButtonProps) => {
  return (
    <button
      type="button"
      className="h-[3.2rem] w-[3.2rem] flex-col-center rounded-[8px] bg-gray-900"
      onClick={onOpenBottomSheet}
    >
      <Icon name="ic-calendar" size={2.4} className="cursor-pointer text-gray-white" />
    </button>
  );
};

export default CalendarButton;
