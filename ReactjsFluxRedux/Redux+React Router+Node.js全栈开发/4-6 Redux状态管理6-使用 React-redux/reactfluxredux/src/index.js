import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import { counter } from './store/index.redux';

// 调试工具 redux
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension(): () => {};
/**
 *
 * applyMiddleware 专门处理中间件
 * @type {Store<any, Action> & *}
 */
const store = createStore(counter,compose(
  applyMiddleware(thunk),
  reduxDevtools
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

