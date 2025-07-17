import Icon from '@components/icon/icon';

interface BottomSheetIndicatorProps {
  onClick?: () => void;
}

const BottomSheetIndicator = ({ onClick }: BottomSheetIndicatorProps) => {
  return (
    <button type="button" className="flex-col-center cursor-pointer py-[1.2rem]" onClick={onClick}>
      <Icon width={4} height={1} name="indicator" />
    </button>
  );
};

export default BottomSheetIndicator;
