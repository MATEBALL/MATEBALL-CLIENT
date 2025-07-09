export const NICKNAME_MIN_LENGTH = 2;
export const NICKNAME_MAX_LENGTH = 6;

export const NICKNAME_ERROR_MESSAGES = {
  LENGTH: '2-6자 이내로 입력해 주세요.',
  WHITESPACE: '닉네임에 띄어쓰기를 포함할 수 없어요.',
  NUMBER: '닉네임에 숫자를 포함할 수 없어요.',
  SPECIALCHAR: '닉네임에 특수문자를 포함할 수 없어요.',
  MIXEDLANG: '닉네임은 한글 또는 영어만 입력할 수 있어요.',
  DUPLICATE: '이미 존재하는 닉네임이에요.',
};

export const NICKNAME_REGEX = {
  WHITESPACE: /\s/,
  NUMBER: /\d/,
  SPECIALCHAR: /[~!@#$%^&*()_+{}[\]:;"'<>,.?/\\|`\-=_]/,
  KOREAN_ONLY: /^[가-힣]+$/,
  ENGLISH_ONLY: /^[a-zA-Z]+$/,
};

export const NICKNAME_PLACEHOLDER = '2-6자 이내의 닉네임을 입력하세요.';
