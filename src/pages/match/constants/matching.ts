export const MATCHING_NOTICE = {
  group: '그룹 매칭은 최대 2건까지 요청할 수 있어요.',
  single: '1:1 매칭은 최대 3건까지 요청할 수 있어요.',
};

export const MATCHING_COMPLETE_MESSAGE = {
  group: '모든 그룹원이 수락하면 그룹원이 됩니다.',
  single: (nickname: string) => `${nickname} 님이 수락하면 그룹원이 됩니다.`,
};

export const MATCHING_HEADER_MESSAGE = {
  group: (nickname: string) => `${nickname}님과 딱 맞는 그룹원이에요!`,
  single: (nickname: string) => `${nickname}님과 딱 맞는 메이트예요!`,
};
