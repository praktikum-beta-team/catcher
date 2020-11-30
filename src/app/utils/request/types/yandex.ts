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
