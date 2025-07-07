import {
  NICKNAME_ERROR_MESSAGES,
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
  NICKNAME_REGEX,
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
