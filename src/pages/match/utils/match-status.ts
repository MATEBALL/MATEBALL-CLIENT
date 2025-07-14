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
