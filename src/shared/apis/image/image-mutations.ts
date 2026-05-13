import { patchFormData, postFormData } from '@apis/base/http';
import { END_POINT } from '@constants/api';
import { IMAGE_KEY } from '@constants/query-key';
import { mutationOptions } from '@tanstack/react-query';
import type { ApiResponse } from '@/shared/types/base-types';
import type {
  PatchProfileImageRequest,
  PatchProfileImageResponse,
  PostProfileImageRequest,
  PostProfileImageResponse,
} from '@/shared/types/image-types';

const createProfileImageFormData = (image: File) => {
  const formData = new FormData();
  formData.append('file', image);

  return formData;
};

export const imageMutations = {
  POST_PROFILE_IMAGE: () =>
    mutationOptions<PostProfileImageResponse, Error, PostProfileImageRequest>({
      mutationKey: IMAGE_KEY.PROFILE.POST(),
      mutationFn: async ({ image }) => {
        const res = await postFormData<ApiResponse<PostProfileImageResponse>>(
          END_POINT.POST_PROFILE_IMAGE,
          createProfileImageFormData(image),
        );

        if (!res.data) {
          throw new Error('프로필 이미지 업로드 응답 데이터가 없습니다.');
        }

        return res.data;
      },
    }),

  PATCH_PROFILE_IMAGE: () =>
    mutationOptions<PatchProfileImageResponse, Error, PatchProfileImageRequest>({
      mutationKey: IMAGE_KEY.PROFILE.PATCH(),
      mutationFn: async ({ image }) => {
        const res = await patchFormData<ApiResponse<PatchProfileImageResponse>>(
          END_POINT.PATCH_PROFILE_IMAGE,
          createProfileImageFormData(image),
        );

        if (!res.data) {
          throw new Error('프로필 이미지 수정 응답 데이터가 없습니다.');
        }

        return res.data;
      },
    }),
};
