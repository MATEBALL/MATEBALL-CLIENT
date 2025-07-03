import { instance } from './instance';

export function get<T>(...args: Parameters<typeof instance.get>) {
	return instance.get<T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
	return instance.post<T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
	return instance.put<T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
	return instance.patch<T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
	return instance.delete<T>(...args);
}
