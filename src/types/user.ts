export interface IUser {
  id?: number;
  password: string;
  email: string;
  dateCreated: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}
