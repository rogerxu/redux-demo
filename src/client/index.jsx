import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import App from './components/App';
import counter from './reducers/counter';

const store = createStore(combineReducers({
  count: counter,
}));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
