/* eslint-disable no-restricted-globals */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface RoutePropsWithAuth extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

/* casos:
  privado & autenticado = true
  privado & não autenticado = redirecionar para o login
  !privado & autenticado = redirecionar para o dashboard
  !privado & !autenticado
*/

const RouteWithAuth: React.FC<RoutePropsWithAuth> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
            }}
          />
        );
      }}
    />
  );
};

export default RouteWithAuth;
