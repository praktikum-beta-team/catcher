export interface IUser {
  id: number;
  firstName: string;
  secondName: string;
  displayName: string;
  login: string;
  email: string;
  phone?: string;
  avatar?: {
    base?: string;
    s?: string;
    m?: string;
    xl?: string;
  };
}
