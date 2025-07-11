import {
  BIRTH_ERROR_MESSAGES,
  GENDER_ERROR_MESSAGES,
  GENDER_OPTIONS,
  NICKNAME_ERROR_MESSAGES,
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
  NICKNAME_REGEX,
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
  birthYear: z
    .string()
    .min(4, { message: BIRTH_ERROR_MESSAGES.LENGTH })
    .max(4, { message: BIRTH_ERROR_MESSAGES.LENGTH })
    .regex(/^\d+$/, { message: BIRTH_ERROR_MESSAGES.NUMBER }),
  gender: z.enum(GENDER_OPTIONS, {
    required_error: GENDER_ERROR_MESSAGES.REQUIRED,
  }),
});

export type NicknameFormValues = z.infer<typeof NicknameSchema>;