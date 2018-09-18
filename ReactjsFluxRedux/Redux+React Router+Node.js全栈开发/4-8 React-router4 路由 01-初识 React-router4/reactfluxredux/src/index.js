import React, {PureComponent, Fragment} from 'react';
import ReactDOM from 'react-dom';

// Redux start
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { counter } from './store/index.redux';
// Redux end

// Router-dom start
import { BrowserRouter, Route, Link } from 'react-router-dom';
// Router-dom end
import App from './App';
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



const Erying = () => {
  return <h2>二营</h2>
}

const Qibinglian = () => {
  return <h2>骑兵连</h2>
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>

      <Fragment>
        {/*点击跳转到指定路由*/}
        <ul>
          <li><Link to="/">一营</Link></li>
          <li><Link to="/erying">二营</Link></li>
          <li><Link to="/qibinglian">骑兵连</Link></li>
        </ul>
        {/*exact表明比如完全匹配*/}
        <Route path="/" exact component={App}></Route>
        <Route path="/erying" component={Erying}></Route>
        <Route path="/qibinglian" component={Qibinglian}></Route>

      </Fragment>
      {/*路由对应渲染模板*/}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

