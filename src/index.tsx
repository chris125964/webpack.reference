import { applyMiddleware, createStore } from 'redux';

import App from './components/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import reducer from './redux/sample/reducer';

const logger = createLogger({ collapsed: true });
const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
