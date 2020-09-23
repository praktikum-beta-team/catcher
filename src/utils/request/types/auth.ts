export interface ISigninRequest {
  login: string;
  password: string;
}

export interface ISigninError {
  reason: string;
}

export interface ISignupRequest {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}
