export interface baseResponseTypes<T> {
  status: number;
  message: string;
  data?: T;
}

export interface responseTypes {
  status: number;
  message: string;
}
