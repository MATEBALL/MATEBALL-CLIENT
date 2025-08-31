import { UserInfoSchema } from '@pages/sign-up/schema/validation-schema';
import type { z } from 'zod';

export const EditProfileSchema = UserInfoSchema.pick({
  nickname: true,
  introduction: true,
});

export type EditProfileValues = z.infer<typeof EditProfileSchema>;
