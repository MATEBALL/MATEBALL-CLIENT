import type { GroupCardProps, SingleCardProps } from '@components/card/match-card/types/card';
import type { ChipColor } from '@components/chip/chip-list';
import { chipVariantOptions } from '@components/chip/styles/chip-variants';
import { MATCH_PENDING_TOAST_MESSAGES } from '@constants/error-toast';
import { CLICKABLE_STATUS_MAP } from '@pages/match/constants/matching';

export const statusToCategory = (status?: string): '대기 중' | '완료' | '실패' | '' => {
  if (!status) return '';
  if (status.includes('매칭 완료')) return '완료';
  if (status.includes('실패')) return '실패';
  return '대기 중';
};

export const getCardColor = (status?: string): 'active' | 'inactive' => {
  if (!status) return 'active';
  if (status.includes('대기') || status.includes('실패')) {
    return 'inactive';
  }
  return 'active';
};

export const fillTabItems = ['전체', '대기 중', '완료', '실패'];

type MatchableCardProps = SingleCardProps | GroupCardProps;

export const getPendingToast = (
  status?: string,
  type?: MatchableCardProps['type'],
): string | '' => {
  if (!status) return '';
  if (status === '요청 대기 중') return MATCH_PENDING_TOAST_MESSAGES.REQUEST_WAITING;
  if (status === '승인 대기 중') {
    return type === 'group'
      ? MATCH_PENDING_TOAST_MESSAGES.APPROVAL_WAITING.group
      : MATCH_PENDING_TOAST_MESSAGES.APPROVAL_WAITING.single;
  }
  return '';
};

export const isClickable = (status?: string) => Boolean(CLICKABLE_STATUS_MAP[status ?? '']);

export const normalizeChipKey = (v?: string) => (v ?? '').replace(/\s/g, '');

export const isChipColor = (k: string): k is ChipColor =>
  Object.hasOwn(chipVariantOptions.bgColor, k as PropertyKey);
