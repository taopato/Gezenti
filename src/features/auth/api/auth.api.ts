import type { ApiResponse } from "../../../core/types/api";
import httpClient from "../../../core/api/httpClient";
import type { LoginRequest, LoggedInUser } from "../types/auth.types";

export async function login(request: LoginRequest): Promise<ApiResponse<LoggedInUser>> {
  const response = await httpClient.post<ApiResponse<LoggedInUser>>(
    "/api/Auth/login",
    request
  );
  return response.data;
}

