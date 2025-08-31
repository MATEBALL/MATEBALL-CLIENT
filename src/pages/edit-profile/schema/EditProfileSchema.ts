import { NicknameSchema } from '@pages/sign-up/schema/validation-schema';
import { z } from 'zod';

export const EditProfileSchema = NicknameSchema.pick({
  nickname: true,
  information: true,
});

export type EditProfileValues = z.infer<typeof EditProfileSchema>;
