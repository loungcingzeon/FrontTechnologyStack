import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { counter, addGun, removeGun, addGunAsync } from './store/index.redux';

/**
 *
 * applyMiddleware 专门处理中间件
 * @type {Store<any, Action> & *}
 */
const store = createStore(counter, applyMiddleware(thunk));


function render(){
  ReactDOM.render(<App  store={store} addGunAsync={addGunAsync} removeGun={removeGun} addGun={addGun}/>, document.getElementById('root'));
}
render();

store.subscribe(render);
