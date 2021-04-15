// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ToastContainer from './components/ToastContainer/ToastContainer';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
