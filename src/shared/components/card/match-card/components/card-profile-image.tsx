import { profileVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProfileProps } from '@components/card/match-card/types/card';
import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';
import type { ReactNode } from 'react';

const CardProfile = ({ type, imgUrl }: CardProfileProps) => {
  const zIndexClasses = [
    'z-[var(--z-card-profile-1)] ml-0',
    '-ml-[0.9rem] z-[var(--z-card-profile-2)]',
    '-ml-[0.9rem] z-[var(--z-card-profile-3)]',
    '-ml-[0.9rem] z-[var(--z-card-profile-4)]',
  ];

  if (type === 'group') {
    const urls = Array.isArray(imgUrl) ? imgUrl.slice(0, 4) : [];
    const emptyCount = Math.max(0, 4 - urls.length);
    const nodes: ReactNode[] = [];

    urls.forEach((url, order) => {
      const hasSrc = typeof url === 'string' && url.length > 0;
      nodes.push(
        <div
          key={hasSrc ? url : `profile-slot-${order}`}
          className={cn(
            'flex items-center justify-center overflow-hidden rounded-full',
            zIndexClasses[order],
            profileVariants({ type }),
          )}
        >
          {hasSrc ? (
            <img
              src={url}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[2.8rem] w-[2.8rem] rounded-full object-cover"
            />
          ) : (
            <Icon size={2.8} name="profile" className="rounded-full" />
          )}
        </div>,
      );
    });

    Array.from({ length: emptyCount }).forEach((_, idx) => {
      const slotIndex = urls.length + idx;
      nodes.push(
        <div
          key={`empty-slot-${slotIndex}`}
          className={cn(
            'flex-row-center overflow-hidden rounded-full',
            profileVariants({ type }),
            zIndexClasses[slotIndex],
          )}
        >
          <div className="h-[2.8rem] w-[2.8rem] rounded-full bg-gray-400" />
        </div>,
      );
    });

    return <div className="flex items-center">{nodes}</div>;
  }

  const src =
    typeof imgUrl === 'string'
      ? imgUrl
      : Array.isArray(imgUrl)
        ? imgUrl[0] ?? ''
        : '';

  return (
    <div className="flex items-center overflow-hidden rounded-full">
      {src ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className={cn('overflow-hidden rounded-full object-cover', profileVariants({ type }))}
        />
      ) : (
        <Icon
          width={6}
          height={6}
          name="profile"
          className={cn('overflow-hidden rounded-full', profileVariants({ type }))}
        />
      )}
    </div>
  );
};

export default CardProfile;
