import React, { createContext, useState } from 'react';
import { LoginCredentials, RegisterCredentials } from 'shared/IAuth';

interface IContextValues {
  token: string;
  logout: () => void;
  isAuthenticated: () => boolean;
  login: (credentials: LoginCredentials) => void;
  register: (credentials: RegisterCredentials) => void;
}

const initialValues = {
  token: '',
  logout: () => {},
  isAuthenticated: () => false,
  login: (credentials: LoginCredentials) => {},
  register: (credentials: RegisterCredentials) => {},
};

const AuthContext = createContext<IContextValues>(initialValues);
const { Provider } = AuthContext;

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [token, setToken] = useState('ef4323fv');
  const login = (credentials: LoginCredentials) => {};
  const register = (credentials: RegisterCredentials) => {};
  const logout = () => {};
  const isAuthenticated = (): boolean => {
    // return sessionStorage.getItem("access_token") != null;
    return false;
  };

  return (
    <Provider value={{ isAuthenticated, logout, login, register, token }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
