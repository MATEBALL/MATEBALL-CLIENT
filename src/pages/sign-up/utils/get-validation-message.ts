import type { FieldError } from 'react-hook-form';
import { NICKNAME_DUPLICATED, NICKNAME_SUCCESS_MESSAGE } from '../constants/NOTICE';
import { COMMON_ERROR_MESSAGES } from '../constants/validation';
import type { NicknameStatus } from '../types/nickname-types';

export const getNicknameValidationMessage = (
  nicknameStatus: NicknameStatus,
  error: FieldError | undefined,
  value: string,
) => {
  if (nicknameStatus === 'duplicate') return NICKNAME_DUPLICATED;

  if (error && !value.trim()) {
    return COMMON_ERROR_MESSAGES.REQUIRED;
  }

  if (error?.message) {
    return error.message;
  }

  if (nicknameStatus === 'available') {
    return NICKNAME_SUCCESS_MESSAGE;
  }

  return undefined;
};

export const getRequiredValidationMessage = (error: FieldError | undefined, value: string) => {
  if (error && !value.trim()) {
    return COMMON_ERROR_MESSAGES.REQUIRED;
  }

  return error?.message;
};
