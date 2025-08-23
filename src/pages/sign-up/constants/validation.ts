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

export const BIRTH_PLACEHOLDER = 'YYYY 형태로 입력하세요.';

export const INFORMATION_PLACEHOLDER =
  '엘지팬입니다! 같이 응원가 떼창해요~\n잠실에서 김말국 먹으면서 직관하고 싶어요 ㅎㅎ';

export const BIRTH_ERROR_MESSAGES = {
  LENGTH: '숫자로 4자리 입력만 가능해요.',
  NUMBER: '숫자만 입력 가능해요.',
};

export const GENDER_ERROR_MESSAGES = {
  REQUIRED: '성별을 선택해주세요.',
};

export const GENDER_OPTIONS = ['남성', '여성'] as const;

export const SIGNUP_STEPS = ['AGREEMENT', 'INFORMATION'];

export const INFORMATION_MIN_LENGTH = 1;
export const INFORMATION_MAX_LENGTH = 50;
