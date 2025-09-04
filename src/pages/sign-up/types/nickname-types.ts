export interface postNicknameRequest {
  nickname: string;
}

export type NicknameStatus = 'idle' | 'checking' | 'available' | 'duplicate';
