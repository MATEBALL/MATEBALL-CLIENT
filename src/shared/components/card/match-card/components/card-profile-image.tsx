import { profileVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProfileProps } from '@components/card/match-card/types/card';
import { getDisplayImages } from '@components/card/match-card/utils/get-display-images';
import { cn } from '@libs/cn';

const CardProfile = ({ type, imgUrl = [] }: CardProfileProps) => {
  const DEFAULT_PROFILE_URL = '/svgs/profile.svg';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = DEFAULT_PROFILE_URL;
  };

  const normalizedImgUrl = Array.isArray(imgUrl) ? imgUrl : [imgUrl];
  const displayImages = getDisplayImages(type, normalizedImgUrl);

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
