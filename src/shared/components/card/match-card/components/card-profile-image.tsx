import { cn } from '@libs/cn';
import type React from 'react';
import defaultProfile from '../../../../assets/svgs/profile.svg';
import { profileVariants } from '../styles/card-variants';
import type { CardProfileProps } from '../types/card';

const CardProfile = ({ type, imgUrl = [] }: CardProfileProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultProfile;
  };

  const getDisplayImages = (): string[] => {
    if (type === 'group') {
      const filledImages = imgUrl && imgUrl.length > 0 ? imgUrl.slice(0, 4) : [];
      const emptySlots = 4 - filledImages.length;
      const emptyImages = Array(emptySlots).fill('');
      return [...filledImages, ...emptyImages];
    }

    if (!imgUrl || imgUrl.length === 0) {
      return [defaultProfile];
    }

    return imgUrl.slice(0, 1);
  };

  const displayImages = getDisplayImages();

  return (
    <div className="flex items-center">
      {displayImages.map((imgUrl: string, imageNumber: number) => (
        <div
          key={imgUrl || `empty-slot-${imageNumber}`}
          className={cn(
            type === 'group' && imageNumber === 0 && 'z-40 ml-0',
            type === 'group' && imageNumber === 1 && '-ml-[0.9rem] z-30',
            type === 'group' && imageNumber === 2 && '-ml-[0.9rem] z-20',
            type === 'group' && imageNumber === 3 && '-ml-[0.9rem] z-10',
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
            <div
              className={cn(
                profileVariants({ type }),
                'flex items-center justify-center bg-gray-400',
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardProfile;
