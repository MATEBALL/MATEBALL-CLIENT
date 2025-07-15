export const getStoredData = (key: string): Record<string, string | null> => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};
