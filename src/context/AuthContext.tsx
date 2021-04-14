/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface CredentialsData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: CredentialsData): Promise<void>;
}

interface AuthProvider {
  children: any;
}

interface AuthData {
  token: string;
  user: object;
}

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider = ({ children }: AuthProvider) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@Tatto:token');
    const user = localStorage.getItem('@Tatto:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<AuthData>('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Tatto:token', token);
    localStorage.setItem('@Tatto:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Must be used with an AuthProvider');
  }

  return context;
}

export { AuthContextProvider, useAuth };
