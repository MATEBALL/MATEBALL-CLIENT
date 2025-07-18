const DEFAULT_PROFILE_URL = '/svgs/profile.svg';

export function getDisplayImages(type: string, imgUrl: string[] = []): string[] {
  if (type === 'group') {
    const filledImages = imgUrl.length > 0 ? imgUrl.slice(0, 4) : [];
    const emptySlots = 4 - filledImages.length;
    return [...filledImages, ...Array(emptySlots).fill('')];
  }

  return imgUrl.length > 0 ? [imgUrl[0]] : [DEFAULT_PROFILE_URL];
}
