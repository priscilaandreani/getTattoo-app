import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface CredentialsData {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: CredentialsData): Promise<void>;
}

interface AuthProvider {
  children: any;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthProvider) => {
  const name = 'Priscila';

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, name }}>
      {children}
    </AuthContext.Provider>
  );
};
