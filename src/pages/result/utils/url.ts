export function normalizeUrl(url: string): string {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

export function openExternal(url: string): void {
  window.open(normalizeUrl(url), '_blank', 'noopener,noreferrer');
}
