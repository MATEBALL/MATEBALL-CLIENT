import { instance } from '@apis/base/instance';

export function get<T>(...args: Parameters<typeof instance.get>): Promise<T> {
  return instance
    .get<T>(...args)
    .then((res) => res.data)
    .catch((error) => {
      // 404 에러는 정상적인 케이스이므로 에러를 던지지 않음
      if (error?.response?.status === 404) {
        // 404 에러는 빈 데이터로 처리
        return { gameSchedule: [] } as T;
      }
      // 400 에러도 처리 (잘못된 요청 - 날짜 형식 등)
      if (error?.response?.status === 400) {
        // 400 에러도 빈 데이터로 처리
        return { gameSchedule: [] } as T;
      }
      // 다른 에러는 다시 던지기
      throw error;
    });
}

export function post<T>(...args: Parameters<typeof instance.post>): Promise<T> {
  return instance.post<T>(...args).then((res) => res.data);
}

export function patch<T>(...args: Parameters<typeof instance.patch>): Promise<T> {
  return instance.patch<T>(...args).then((res) => res.data);
}

export function put<T>(...args: Parameters<typeof instance.put>): Promise<T> {
  return instance.put<T>(...args).then((res) => res.data);
}
