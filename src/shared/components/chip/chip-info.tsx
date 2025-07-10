import Icon from '@components/icon/icon';
<<<<<<< HEAD
<<<<<<< HEAD
import type { IconName } from '@constants/icon-list';

interface ChipInfoProps {
  icon: IconName;
=======

interface ChipInfoProps {
  icon: string;
>>>>>>> b3d0c9d (feat: button game 컴포넌트 구현 (#81))
=======
import type { IconName } from '@constants/icon-list';

interface ChipInfoProps {
  icon: IconName;
>>>>>>> 6a3c3a6 (feat: 로그인 페이지 뷰 구현 및 카카오 로그인 api 연결 (#71))
  text: string;
  iconColor?: string;
  size?: number;
}

const ChipInfo = ({ icon, text, iconColor, size }: ChipInfoProps) => {
  return (
    <div className="flex-row-center gap-[0.4rem] text-gray-600">
<<<<<<< HEAD
<<<<<<< HEAD
      <Icon name={icon} size={size} className={iconColor} />
=======
      <Icon name={icon} width={size} height={size} className={iconColor} />
>>>>>>> b3d0c9d (feat: button game 컴포넌트 구현 (#81))
=======
      <Icon name={icon} size={size} className={iconColor} />
>>>>>>> 980e243 (feat: card 공통 컴포넌트 구현 (#77))
      {text}
    </div>
  );
};

export default ChipInfo;
