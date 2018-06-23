import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import './components/ui/styles/main.scss';

import ChatApp from './chat-app';

ReactDOM.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();