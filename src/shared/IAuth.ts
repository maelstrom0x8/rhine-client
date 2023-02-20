
export type LoginCredentials = { 
    username: string; 
    password: string;
};

export type RegisterCredentials = {
  username: string;
  email: string;
  password: string;
};

export interface IUserInfo {
  username: string;
  email: string;
  password: string;
}

export interface IAuthenticateUserResponse {
  accessToken: string;
  expiresIn: number;
}
