import React, { ReactNode } from 'react';
import { v4 as uuid } from 'uuid';
import ToastContainer from '../components/ToastContainer/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessageData, 'id'>): void;
  removeToast(id: string): void;
}

interface ToastContextProviderData {
  children?: ReactNode;
}

export interface ToastMessageData {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = React.createContext<ToastContextData>(
  {} as ToastContextData,
);

const ToastContextProvider: React.FC = ({
  children,
}: ToastContextProviderData) => {
  const [toastMessage, setToastMessage] = React.useState<ToastMessageData[]>(
    [],
  );

  const addToast = React.useCallback(
    ({ title, type, description }: Omit<ToastMessageData, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };
      setToastMessage(oldMessages => [...oldMessages, toast]);
    },
    [],
  );

  const removeToast = React.useCallback((id: string) => {
    setToastMessage(oldMessages => oldMessages.filter(msg => msg.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
      }}
    >
      {children}
      <ToastContainer toastMessage={toastMessage} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const contextToast = React.useContext(ToastContext);

  if (!contextToast) {
    throw new Error('useToast must be used within a ToastContextProvider');
  }
  return contextToast;
}

export { useToast, ToastContextProvider };
