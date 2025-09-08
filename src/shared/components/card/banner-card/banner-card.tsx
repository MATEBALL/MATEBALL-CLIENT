import { cn } from '@libs/cn';
import { useState } from 'react';
import BannerImg from '/images/card_banner_img.webp';

interface CardBannerProps {
  text: string;
  subText?: string;
  className?: string;
  onClick?: () => void;
}

const BannerCard = ({ text, subText, onClick }: CardBannerProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <button type="button" className={cn('relative cursor-pointer text-left')} onClick={onClick}>
      <img
        src={BannerImg}
        alt="홈배너"
        className="min-h-[9.6rem] w-full"
        onLoad={() => setImageLoaded(true)}
      />
      {imageLoaded && (
        <div className="absolute inset-0 flex flex-col justify-center gap-[0.4rem] py-[2.2rem] pl-[2.4rem]">
          <p className="cap_14_m text-gray-800">{subText}</p>
          <p className="subhead_18_sb text-gray-black">{text}</p>
        </div>
      )}
    </button>
  );
};

export default BannerCard;
