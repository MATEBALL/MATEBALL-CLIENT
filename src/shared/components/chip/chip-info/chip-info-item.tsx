import type { FC } from 'react';

interface ChipInfoItemProps {
  iconId: string;
  text: string;
}

const ChipInfoItem: FC<ChipInfoItemProps> = ({ iconId, text }) => {
  return (
    <div className="flex items-center gap-[0.4rem] pr-[0.8rem] py-[0.4rem] rounded-[4px]">
      <svg className="w-[1.6rem] h-[1.6rem] text-gray-600 fill-current">
        <use xlinkHref={`#${iconId}`} />
      </svg>
      <span className="cap_12_m text-gray-600">{text}</span>
    </div>
  );
};

export default ChipInfoItem;
