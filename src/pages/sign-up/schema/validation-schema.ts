import {
  BIRTH_ERROR_MESSAGES,
  BIRTH_YEAR_MAX,
  BIRTH_YEAR_MIN,
  GENDER_ERROR_MESSAGES,
  GENDER_OPTIONS,
  INTRODUCTION_MAX_LENGTH,
  INTRODUCTION_MIN_LENGTH,
  NICKNAME_ERROR_MESSAGES,
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
  NICKNAME_REGEX,
} from '@pages/sign-up/constants/validation';
import { z } from 'zod';

export const UserInfoSchema = z.object({
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
    .length(4, { message: BIRTH_ERROR_MESSAGES.LENGTH })
    .regex(/^\d+$/, { message: BIRTH_ERROR_MESSAGES.NUMBER })
    .refine(
      (val) => {
        const year = Number(val);
        return year >= BIRTH_YEAR_MIN && year <= BIRTH_YEAR_MAX;
      },
      { message: BIRTH_ERROR_MESSAGES.RANGE },
    ),

  gender: z.enum(GENDER_OPTIONS, {
    required_error: GENDER_ERROR_MESSAGES.REQUIRED,
  }),

  introduction: z.string().trim().min(INTRODUCTION_MIN_LENGTH).max(INTRODUCTION_MAX_LENGTH),
});

export type UserInfoFormValues = z.infer<typeof UserInfoSchema>;
