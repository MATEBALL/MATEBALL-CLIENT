import { instance } from '@apis/base/instance';

export function get<T>(...args: Parameters<typeof instance.get>): Promise<T> {
  return instance.get<T>(...args).then((res) => res.data);
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
