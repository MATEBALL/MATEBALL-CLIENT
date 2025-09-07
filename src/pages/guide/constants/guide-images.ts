export const GUIDE_IMAGES = [
  { id: 1, src: 'images/guide_image_1.webp', alt: '가이드 1' },
  { id: 2, src: 'images/guide_image_2.webp', alt: '가이드 2' },
  { id: 3, src: 'images/guide_image_3.webp', alt: '가이드 3' },
  { id: 4, src: 'images/guide_image_4.webp', alt: '가이드 4' },
  { id: 5, src: 'images/guide_image_5.webp', alt: '가이드 5' },
  { id: 6, src: 'images/guide_image_6.webp', alt: '가이드 6' },
] as const;

export type GuideImage = (typeof GUIDE_IMAGES)[number];
