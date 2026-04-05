import type { ChipColor } from '@components/card/match-card/types/card';

const CHIP_COLOR_MAP: Record<string, ChipColor> = {
  두산: '두산',
  LG: 'LG',
  롯데: '롯데',
  NC: 'NC',
  KIA: 'KIA',
  한화: '한화',
  KT: 'KT',
  삼성: '삼성',
  SSG: 'SSG',
  키움: '키움',
  열정응원러: '열정응원러',
  경기집중러: '경기집중러',
  직관먹방러: '직관먹방러',
};

export const getChipColor = (value: string | null | undefined): ChipColor => {
  if (!value) return 'default';

  return CHIP_COLOR_MAP[value] ?? 'default';
};
