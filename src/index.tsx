import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './app';

import { configureAppStore } from 'store/configureStore';

import 'sanitize.css/sanitize.css';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  MOUNT_NODE
);
