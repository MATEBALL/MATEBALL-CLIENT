export interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
}

export interface responseTypes {
  status: number;
  message: string;
}
