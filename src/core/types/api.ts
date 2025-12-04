export interface ApiResponse<T> {
  data: T | null;
  message: string | null;
  statusCode: number;
  error: string | null;
  isSuccess: boolean;
}

