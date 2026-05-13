/**
 * 프로필 이미지 업로드
 * POST /v3/users/profile-image
 */
export interface PostProfileImageRequest {
  image: File;
}

export interface PostProfileImageResponse {
  profileImageKey: string;
  profileImageUrl: string;
}

/**
 * 프로필 이미지 수정
 * PATCH /v3/users/profile-image
 */
export interface PatchProfileImageRequest {
  image: File;
}

export interface PatchProfileImageResponse {
  profileImageUrl: string;
}

/**
 * 프로필 이미지 삭제
 * DELETE /v3/users/profile-image
 */
export interface DeleteProfileImageResponse {
  profileImageUrl: string;
}
