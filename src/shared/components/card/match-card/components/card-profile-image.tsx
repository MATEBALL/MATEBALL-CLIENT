import { profileVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProfileProps } from '@components/card/match-card/types/card';
import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';
import type { ReactNode } from 'react';

const CardProfile = ({ type, imgUrl = [] }: CardProfileProps) => {
  const zIndexClasses = [
    'z-[var(--z-card-profile-1)] ml-0',
    '-ml-[0.9rem] z-[var(--z-card-profile-2)]',
    '-ml-[0.9rem] z-[var(--z-card-profile-3)]',
    '-ml-[0.9rem] z-[var(--z-card-profile-4)]',
  ];

  if (type === 'group') {
    const filledImages = imgUrl.slice(0, 4);
    const emptySlots = Array(4 - filledImages.length).fill('');

    const profileElements: ReactNode[] = [];

    filledImages.forEach((url, order) => {
      const key = url || `profile-slot-${order}`;
      profileElements.push(
        <div key={key} className={cn(zIndexClasses[order])}>
          <Icon size={2.8} name="profile" className={cn(profileVariants({ type }))} />
        </div>,
      );
    });

    emptySlots.forEach((_, order) => {
      const slotIndex = filledImages.length + order;
      profileElements.push(
        <div
          key={`empty-slot-${slotIndex}`}
          className={cn(
            profileVariants({ type }),
            'flex-row-center bg-gray-400',
            zIndexClasses[slotIndex],
          )}
        />,
      );
    });

    return <div className="flex items-center">{profileElements}</div>;
  }

  return (
    <div className="flex items-center">
      <Icon size={6} name="profile" className={cn(profileVariants({ type }))} />
    </div>
  );
};

export default CardProfile;
