import Icon from '@components/icon/icon';
import type { IconName } from '@constants/icon-list';

interface ChipInfoProps {
  icon: IconName;
  text: string;
  iconColor?: string;
  size?: number;
}

const ChipInfo = ({ icon, text, iconColor, size }: ChipInfoProps) => {
  return (
    <div className="flex-row-center gap-[0.4rem] text-gray-600">
      <Icon name={icon} size={size} className={iconColor} />
      {text}
    </div>
  );
};

export default ChipInfo;
