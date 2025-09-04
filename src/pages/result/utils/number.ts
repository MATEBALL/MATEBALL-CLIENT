export const parseId = (v?: string | null) => (v && /^\d+$/.test(v) ? Number(v) : NaN);
