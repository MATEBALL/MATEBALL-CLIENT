<<<<<<< HEAD
import { cn } from '@libs/cn';
import type React from 'react';
import defaultProfile from '../../../../assets/svgs/profile.svg';
import { profileVariants } from '../styles/card-variants';
import type { CardProfileProps } from '../types/card';
=======
import { profileVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProfileProps } from '@components/card/match-card/types/card';
import { getDisplayImages } from '@components/card/match-card/utils/get-display-images';
import { cn } from '@libs/cn';
import defaultProfile from '@svg/profile.svg';
>>>>>>> 6982561 (fix: 분기 처리 및 chip state 넣기(#49))

const CardProfile = ({ type, imgUrl = [] }: CardProfileProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultProfile;
  };

  const displayImages = getDisplayImages(type, imgUrl);

  return (
    <div className="flex items-center">
      {displayImages.map((imgUrl: string, imageNumber: number) => (
        <div
          key={imgUrl || `empty-slot-${imageNumber}`}
          className={cn(
            type === 'group' && imageNumber === 0 && 'z-[var(--z-card-profile-1)] ml-0',
            type === 'group' && imageNumber === 1 && '-ml-[0.9rem] z-[var(--z-card-profile-2)]',
            type === 'group' && imageNumber === 2 && '-ml-[0.9rem] z-[var(--z-card-profile-3)]',
            type === 'group' && imageNumber === 3 && '-ml-[0.9rem] z-[var(--z-card-profile-4)]',
          )}
        >
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={`${type} 프로필`}
              onError={handleImageError}
              className={cn(profileVariants({ type }))}
            />
          ) : (
            <div className={cn(profileVariants({ type }), 'flex-row-center bg-gray-400')} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardProfile;
