import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { counter, addGun, removeGun } from './store/index.redux';

const store = createStore(counter);


function render(){
  ReactDOM.render(<App  store={store} removeGun={removeGun} addGun={addGun}/>, document.getElementById('root'));
}
render();

store.subscribe(render);
