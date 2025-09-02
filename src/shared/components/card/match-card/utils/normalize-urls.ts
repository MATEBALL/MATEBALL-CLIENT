export type ImageUrlInput = string | string[] | undefined;

export const normalizeUrls = (url: ImageUrlInput): string[] => {
  if (typeof url === 'string') return [url];
  return url ?? [];
};
