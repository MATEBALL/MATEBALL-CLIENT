import Icon from '@components/icon/icon';
<<<<<<< HEAD
import type { IconName } from '@constants/icon-list';

interface ChipInfoProps {
  icon: IconName;
=======

interface ChipInfoProps {
  icon: string;
>>>>>>> b3d0c9d (feat: button game 컴포넌트 구현 (#81))
  text: string;
  iconColor?: string;
  size?: number;
}

const ChipInfo = ({ icon, text, iconColor, size }: ChipInfoProps) => {
  return (
    <div className="flex-row-center gap-[0.4rem] text-gray-600">
<<<<<<< HEAD
      <Icon name={icon} size={size} className={iconColor} />
=======
      <Icon name={icon} width={size} height={size} className={iconColor} />
>>>>>>> b3d0c9d (feat: button game 컴포넌트 구현 (#81))
      {text}
    </div>
  );
};

export default ChipInfo;
