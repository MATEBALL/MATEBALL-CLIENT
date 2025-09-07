import { cn } from '@libs/cn';
import BannerImg from '/images/card_banner_img.webp';

interface CardBannerProps {
  text: string;
  subText?: string;
  className?: string;
}

const BannerCard = ({ text, subText, className }: CardBannerProps) => {
  return (
    <div className={cn('relative w-full', className)}>
      <img src={BannerImg} alt="홈배너" className="w-full" />
      <div className="absolute inset-0 flex-col justify-center gap-[0.4rem] py-[2.2rem] pl-[2.4rem]">
        <p className="cap_14_m text-gray-800">{subText}</p>
        <p className="subhead_18_sb text-gray-black">{text}</p>
      </div>
    </div>
  );
};

export default BannerCard;
