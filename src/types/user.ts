export interface IUser {
  sub?: number;
  password: string;
  email: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}
