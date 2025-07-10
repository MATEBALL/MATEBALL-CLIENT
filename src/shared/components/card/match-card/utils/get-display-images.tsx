import defaultProfile from '@svg/profile.svg';

export function getDisplayImages(type: string, imgUrl: string[] = []): string[] {
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
}
