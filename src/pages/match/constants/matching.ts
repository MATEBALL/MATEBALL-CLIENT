export const MATCHING_NOTICE = {
  group: '동시에 진행할 수 있는 그룹 매칭은 최대 2개예요.',
  single: '동시에 진행할 수 있는 1:1 매칭은 최대 3개예요.',
};

export const MATCHING_COMPLETE_MESSAGE = {
  group: '모든 그룹원이 수락하면 그룹원이 돼요.',
  single: '상대방이 요청을 승인하면 매칭이 성사돼요.',
};

export const MATCHING_HEADER_MESSAGE = (nickname: string, isGroup: boolean) =>
  ({
    group: `${nickname} 님과 딱 맞는 그룹원이에요!`,
    single: `${nickname} 님과 딱 맞는 메이트예요!`,
  })[isGroup ? 'group' : 'single'];

export const MATCHING_DESCRIPTION = {
  group: {
    description: '동시에 진행할 수 있는 그룹 매칭은 최대 2개예요.',
    subDescription: '단, 하루에 한 경기만 매칭이 성사되며 같은 날짜의 중복 매칭은 불가능해요!',
  },
  single: {
    description: '동시에 진행할 수 있는 1:1 매칭은 최대 3개예요.',
    subDescription: '단, 하루에 한 경기만 매칭이 성사되며 같은 날짜의 중복 매칭은 불가능해요!',
  },
};

export const MATCHING_SUCCESS_TITLE = {
  group: '그룹 매칭이 성사되었어요!',
  single: '매칭이 성사되었어요!',
};
export const MAX_CREATE_DESCRIPTION = {
  group: '동시에 진행할 수 있는 그룹 매칭은 최대 2개예요.',
  single: '동시에 진행할 수 있는 1:1 매칭은 최대 3개예요.',
};

export const MATCHING_GUIDE_MESSAGE_TITLE = (nickname: string) =>
  `${nickname} 님을 위한\n맞춤 매칭이 생성되었어요!`;

export const MATCHING_GUIDE_MESSAGE_DESCRIPTION =
  '딱! 맞는 메이트의 요청이 도착하면\n' + "'매칭 현황'에서 확인할 수 있어요.";

export const CLICKABLE_STATUS_MAP: Record<string, string> = {
  '매칭 완료': 'success',
  '승인 완료': 'agree',
  '새 요청': 'received',
};
