import type { FC } from 'react';
import Icon from '@components/Icon';

interface ChipInfoItemProps {
  iconName: string;
  text: string;
}

const ChipInfoItem: FC<ChipInfoItemProps> = ({ iconName, text }) => {
  return (
    <div className="flex items-center text-gray-600 gap-[0.4rem] pr-[0.8rem] py-[0.4rem] rounded-[4px]">
      <Icon name={iconName} width={1.6} height={1.6} />
      <span className="cap_12_m text-gray-600">{text}</span>
    </div>
  );
};

export default ChipInfoItem;
