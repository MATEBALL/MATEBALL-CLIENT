import type { GroupCardProps, SingleCardProps } from '@components/card/match-card/types/card';

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
  if (status === '요청 대기 중') return '메이트의 요청을 기다리는 중입니다.';
  if (status === '승인 대기 중') {
    return type === 'group'
      ? '메이트 전원의 승인을 기다리는 중입니다.'
      : '메이트의 승인을 기다리는 중입니다.';
  }
  return '';
};
