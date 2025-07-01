export interface responseTypes<T> {
	status: number;
	message: string;
	data: T;
}

export interface errorResponseTypes {
	status: number;
	message: string;
}
