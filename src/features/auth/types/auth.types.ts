export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoggedInUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
}

