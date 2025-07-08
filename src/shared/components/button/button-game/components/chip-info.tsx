import Icon from '@components/icon/icon';

interface ChipInfoProps {
  icon: string;
  text: string;
  iconColor?: string;
}

const ChipInfo = ({ icon, text, iconColor }: ChipInfoProps) => {
  return (
    <div className="flex-row-center gap-[0.4rem] text-gray-600">
      <Icon name={icon} width={1.6} height={1.6} className={iconColor} />
      {text}
    </div>
  );
};

export default ChipInfo;
