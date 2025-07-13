export const statusToCategory = (status?: string): '대기 중' | '완료' | '실패' | '' => {
  if (!status) return '';
  if (['승인대기중', '요청대기중', '대기중'].includes(status)) return '대기 중';
  if (['승인 완료', '매칭 완료'].includes(status)) return '완료';
  if (['매칭 실패'].includes(status)) return '실패';
  return '';
};

export const getCardColor = (status?: string): 'active' | 'inactive' => {
  const inactiveStatuses = ['승인대기중', '요청대기중', '대기중', '매칭 실패'];
  return inactiveStatuses.includes(status ?? '') ? 'inactive' : 'active';
};
