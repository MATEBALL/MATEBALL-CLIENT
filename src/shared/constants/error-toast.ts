export const MATCH_REQUEST_ERROR_MESSAGES = {
  TOO_MANY_REQUESTS: {
    status: 429,
    message: '요청 및 생성할 수 있는 매칭 개수를 초과했어요.',
  },
  DUPLICATE_MATCH: {
    status: 400,
    message: '같은 날짜에 중복 매칭은 불가능해요.',
  },
};

export const MATCH_PENDING_TOAST_MESSAGES = {
  REQUEST_WAITING: '메이트의 요청을 기다리는 중입니다.',
  APPROVAL_WAITING: {
    single: '메이트의 승인을 기다리는 중입니다.',
    group: '메이트 전원의 승인을 기다리는 중입니다.',
  },
};

export const DATE_SELECT_TOAST_MESSAGE = '직관 준비를 위해 2일 후 날짜부터 선택 가능해요.';
