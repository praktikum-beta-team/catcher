export interface IYandexPasportResponse {
  id: number;
  login: string;
  first_name: string;
  last_name: string;
  real_name: string;
  default_email: string;
  default_avatar_id: string;
}

export interface IYandexPasportRequest {
  format: "json" | "xml";
  with_openid_identity?: 1 | "yes" | "true";
  oauth_token?: string;
}

export interface IYandexTokenResponse {
  token_type: string;
  access_token: string;
  expires_in: string;
  refresh_token: string;
  scope: string;
}

export interface IYandexTokenRequest {
  grant_type: "authorization_code";
  code: string;
  client_id?: string;
  client_secret?: string;
  device_id?: string;
  device_name?: string;
}

export interface IYandexTokenResponseError {
  error: string;
  error_description: string;
}
