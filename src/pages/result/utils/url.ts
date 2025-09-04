export const normalizeUrl = (url: string): string =>
  /^https?:\/\//i.test(url) ? url : `https://${url}`;

export const openExternal = (url: string): void => {
  window.open(normalizeUrl(url), '_blank', 'noopener,noreferrer');
};
