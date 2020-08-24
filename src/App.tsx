import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import store from './store';

import Routes from './routes';

import GlobalStyle from './assets/styles/global';

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
    <GlobalStyle />
  </>
);

export default App;
