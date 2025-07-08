import { cn } from '@libs/cn';
import type { CardMatchingRateProps } from '../types/card';

const CardMatchingRate = ({ percent, className }: CardMatchingRateProps) => {
  return (
    <div
      className={cn(
        'max-w-[12.5rem] flex-row-between rounded-[8px] bg-gray-100 px-[1.2rem] py-[0.4rem]',
        className,
      )}
    >
      <span className="cap_14_sb text-gray-600">매칭률</span>
      <div className="h-[2.2rem] w-[0.1rem] rounded-full bg-gray-300" />
      <span className="head_20_sb text-main-900">{percent}%</span>
    </div>
  );
};

export default CardMatchingRate;
