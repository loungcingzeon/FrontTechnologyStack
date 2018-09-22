import React, {PureComponent, Fragment} from 'react';
import { render } from 'react-dom';

// Redux start
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { counter } from './store/index.redux';
import Auth from './Login/Auth';
import Dashboard from './Login/Dashboard';
import AuthRedux from './Login/Auth.redux';

// Redux end

// Router-dom start
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
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


class Test extends PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    //this.props.history.push('/'); // js 跳转路由的根目录
    return <h2>测试组件{this.props.match.params.location}</h2>
  }
}
// 登录
/**
 * 没有登录信息，统一跳转login
 */

// 页面 导航+显示+注销
/**
 * 一营
 * 二营
 * 骑兵连
 *
 */

// 全部都用Redux来管理

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Auth}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Redirect to="/dashboard"></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

