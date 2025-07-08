import { cn } from '@libs/cn';
import type React from 'react';
import defaultProfile from '../../../../assets/svgs/profile.svg';
import { profileVariants } from '../styles/card-variants';
import type { CardProfileProps } from '../types/card';

const CardProfile = ({ type, images = [] }: CardProfileProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultProfile;
  };

  const getDisplayImages = (): string[] => {
    if (type === 'group') {
      const filledImages = images && images.length > 0 ? images.slice(0, 4) : [];
      const emptySlots = 4 - filledImages.length;
      const emptyImages = Array(emptySlots).fill('');
      return [...filledImages, ...emptyImages];
    }

    if (!images || images.length === 0) {
      return [defaultProfile];
    }

    return images.slice(0, 1);
  };

  const displayImages = getDisplayImages();

  return (
    <div className="flex items-center">
      {displayImages.map((image: string, imageNumber: number) => (
        <div
          key={image || `empty-slot-${imageNumber}`}
          className={cn(
            type === 'group' && imageNumber === 0 && 'z-40 ml-0',
            type === 'group' && imageNumber === 1 && '-ml-[0.9rem] z-30',
            type === 'group' && imageNumber === 2 && '-ml-[0.9rem] z-20',
            type === 'group' && imageNumber === 3 && '-ml-[0.9rem] z-10',
          )}
        >
          {image ? (
            <img
              src={image}
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
