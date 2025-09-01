import { profileVariants } from '@components/card/match-card/styles/card-variants';
import type { CardProfileProps } from '@components/card/match-card/types/card';
import Icon from '@components/icon/icon';
import { cn } from '@libs/cn';

const CardProfile = ({ type, imgUrl }: CardProfileProps) => {
  const normalizeUrls = (url?: CardProfileProps['imgUrl']): string[] => {
    if (typeof url === 'string') return [url];
    return url ?? [];
  };

  const urls = normalizeUrls(imgUrl);
  const slotCount = type === 'group' ? 4 : 1;
  const slots = Array.from({ length: slotCount }, (_, i) => urls[i] ?? '');

  const zIndexClasses = [
    'z-[var(--z-card-profile-1)] ml-0',
    '-ml-[0.9rem] z-[var(--z-card-profile-2)]',
    '-ml-[0.9rem] z-[var(--z-card-profile-3)]',
    '-ml-[0.9rem] z-[var(--z-card-profile-4)]',
  ];

  const renderGroupItem = (src: string, i: number) => {
    const hasSrc = src.length > 0;
    const isEmptyTail = i >= urls.length;

    return (
      <div
        key={hasSrc ? src : `slot-${i}`}
        className={cn(
          'flex items-center justify-center overflow-hidden rounded-full',
          profileVariants({ type }),
          zIndexClasses[i],
        )}
      >
        {hasSrc ? (
          <img
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-[2.8rem] w-[2.8rem] rounded-full object-cover"
          />
        ) : isEmptyTail ? (
          <div className="h-[2.8rem] w-[2.8rem] rounded-full bg-gray-400" />
        ) : (
          <Icon size={2.8} name="profile" className="rounded-full" />
        )}
      </div>
    );
  };

  const renderSingleItem = (src: string, i: number) => (
    <div
      key={src || `slot-${i}`}
      className={cn('overflow-hidden rounded-full', profileVariants({ type }))}
    >
      {src ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className="overflow-hidden rounded-full object-cover"
        />
      ) : (
        <Icon width={6} height={6} name="profile" className="overflow-hidden rounded-full" />
      )}
    </div>
  );

  if (type === 'group') {
    return <div className="flex items-center">{slots.map(renderGroupItem)}</div>;
  }

  return (
    <div className="flex items-center overflow-hidden rounded-full">
      {slots.map(renderSingleItem)}
    </div>
  );
};

export default CardProfile;
