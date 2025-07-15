export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  SERVER_ERROR: 500,
} as const;

export const RESPONSE_MESSAGE: Record<number, string> = {
  [HTTP_STATUS.BAD_REQUEST]: '입력값이 올바르지 않습니다.',
  [HTTP_STATUS.UNAUTHORIZED]: '요청 헤더가 올바르지 않는 토큰입니다.',
  [HTTP_STATUS.FORBIDDEN]: '접근 권한이 없습니다.',
  [HTTP_STATUS.NOT_FOUND]: '존재하지 않는 데이터입니다.',
  [HTTP_STATUS.METHOD_NOT_ALLOWED]: '지원하지 않는 HTTP 메소드입니다.',
  [HTTP_STATUS.CONFLICT]: '이미 존재하는 데이터입니다.',
  [HTTP_STATUS.SERVER_ERROR]: '서버 에러가 발생했습니다.',
};
