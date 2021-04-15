// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>

    <GlobalStyle />
  </>
);

export default App;
