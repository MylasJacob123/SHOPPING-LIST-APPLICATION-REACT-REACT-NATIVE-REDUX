import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(RootApp);
