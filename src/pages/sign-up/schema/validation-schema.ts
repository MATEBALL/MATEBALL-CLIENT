import {
  NICKNAME_ERROR_MESSAGES,
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
  NICKNAME_REGEX,
<<<<<<< HEAD
<<<<<<< HEAD
} from '@pages/sign-up/constants/validation';
import { z } from 'zod';

export const NicknameSchema = z.object({
  nickname: z
    .string()
    .min(NICKNAME_MIN_LENGTH, { message: NICKNAME_ERROR_MESSAGES.LENGTH })
    .max(NICKNAME_MAX_LENGTH, { message: NICKNAME_ERROR_MESSAGES.LENGTH })
    .refine((val) => !NICKNAME_REGEX.WHITESPACE.test(val), {
      message: NICKNAME_ERROR_MESSAGES.WHITESPACE,
    })
    .refine((val) => !NICKNAME_REGEX.NUMBER.test(val), {
      message: NICKNAME_ERROR_MESSAGES.NUMBER,
    })
    .refine((val) => !NICKNAME_REGEX.SPECIALCHAR.test(val), {
      message: NICKNAME_ERROR_MESSAGES.SPECIALCHAR,
    })
    .refine(
      (val) => NICKNAME_REGEX.KOREAN_ONLY.test(val) || NICKNAME_REGEX.ENGLISH_ONLY.test(val),
      {
        message: NICKNAME_ERROR_MESSAGES.MIXEDLANG,
      },
    ),
});

export type NicknameFormValues = z.infer<typeof NicknameSchema>;
=======
} from '@components/input/constants/validation';
import { z } from 'zod';

export const NicknameSchema = z
  .string()
  .min(NICKNAME_MIN_LENGTH, { message: NICKNAME_ERROR_MESSAGES.LENGTH })
  .max(NICKNAME_MAX_LENGTH, { message: NICKNAME_ERROR_MESSAGES.LENGTH })
  .refine((val) => !NICKNAME_REGEX.WHITESPACE.test(val), {
    message: NICKNAME_ERROR_MESSAGES.WHITESPACE,
  })
  .refine((val) => !NICKNAME_REGEX.NUMBER.test(val), {
    message: NICKNAME_ERROR_MESSAGES.NUMBER,
  })
  .refine((val) => !NICKNAME_REGEX.SPECIALCHAR.test(val), {
    message: NICKNAME_ERROR_MESSAGES.SPECIALCHAR,
  })
  .refine((val) => NICKNAME_REGEX.KOREAN_ONLY.test(val) || NICKNAME_REGEX.ENGLISH_ONLY.test(val), {
    message: NICKNAME_ERROR_MESSAGES.MIXEDLANG,
  });
>>>>>>> 2932e7c (feat: 회원가입 페이지 뷰 구현 (#78))
=======
} from '@pages/sign-up/constants/validation';
import { z } from 'zod';

export const NicknameSchema = z.object({
  nickname: z
    .string()
    .min(NICKNAME_MIN_LENGTH, { message: NICKNAME_ERROR_MESSAGES.LENGTH })
    .max(NICKNAME_MAX_LENGTH, { message: NICKNAME_ERROR_MESSAGES.LENGTH })
    .refine((val) => !NICKNAME_REGEX.WHITESPACE.test(val), {
      message: NICKNAME_ERROR_MESSAGES.WHITESPACE,
    })
    .refine((val) => !NICKNAME_REGEX.NUMBER.test(val), {
      message: NICKNAME_ERROR_MESSAGES.NUMBER,
    })
    .refine((val) => !NICKNAME_REGEX.SPECIALCHAR.test(val), {
      message: NICKNAME_ERROR_MESSAGES.SPECIALCHAR,
    })
    .refine(
      (val) => NICKNAME_REGEX.KOREAN_ONLY.test(val) || NICKNAME_REGEX.ENGLISH_ONLY.test(val),
      {
        message: NICKNAME_ERROR_MESSAGES.MIXEDLANG,
      },
    ),
});

export type NicknameFormValues = z.infer<typeof NicknameSchema>;
>>>>>>> 1bba458 (feat: 닉네임 react-hook-form 연결 (#95))
