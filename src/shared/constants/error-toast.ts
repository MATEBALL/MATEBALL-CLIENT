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

export const DATE_SELECT_TOAST_MESSAGE = '직관 준비를 위해 2일 이후 날짜부터 선택 가능해요.';
