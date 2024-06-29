// interfaces.ts

export interface SuccessResponse<T = any> {
  success: true;
  data: T;
  message: string;
}

export interface ErrorResponse {
  success: false;
  error: {
    message: string;
    code?: number;
  };
}
