export interface IPostLogin {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
}

export interface IPostRegister {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
}
