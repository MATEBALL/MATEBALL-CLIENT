import Icon from '@components/icon/icon';

interface ChipInfoItemProps {
  iconName: string;
  text: string;
}

const ChipInfoItem = ({ iconName, text }: ChipInfoItemProps) => {
  return (
    <div className="flex items-center gap-[0.4rem] rounded-[4px] py-[0.4rem] pr-[0.8rem] text-gray-600">
      <Icon name={iconName} width={1.6} height={1.6} />
      <span className="cap_12_m text-gray-600">{text}</span>
    </div>
  );
};

export default ChipInfoItem;
