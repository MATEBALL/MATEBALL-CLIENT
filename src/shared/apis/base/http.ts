import { instance } from '@apis/base/instance';
export async function get<T>(...args: Parameters<typeof instance.get>): Promise<T> {
  const res = await instance.get<T>(...args);
  return res.data;
}

export async function post<T>(...args: Parameters<typeof instance.post>): Promise<T> {
  const res = await instance.post<T>(...args);
  return res.data;
}

export async function put<T>(...args: Parameters<typeof instance.put>): Promise<T> {
  const res = await instance.put<T>(...args);
  return res.data;
}

export async function patch<T>(...args: Parameters<typeof instance.patch>): Promise<T> {
  const res = await instance.patch<T>(...args);
  return res.data;
}
export async function del<T>(...args: Parameters<typeof instance.delete>): Promise<T> {
  const res = await instance.delete<T>(...args);
  return res.data;
}
