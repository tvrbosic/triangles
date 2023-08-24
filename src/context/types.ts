import { IUser } from 'types/user';

export interface IAuthContext {
  token: string;
  user: IUser | null;
  setAuthToken: (token: string) => void;
  clearAuthToken: () => void;
}

export interface IAuthProvider {
  children?: React.ReactNode;
}
