import React, { ReactNode } from 'react';
import { AuthContextProvider } from './AuthContext';
import { ToastContextProvider } from './ToastContext';

interface AppProviderData {
  children?: ReactNode;
}

const AppProvider: React.FC = ({ children }: AppProviderData) => {
  const e = 1;
  return (
    <AuthContextProvider>
      <ToastContextProvider>{children}</ToastContextProvider>
    </AuthContextProvider>
  );
};

export default AppProvider;
