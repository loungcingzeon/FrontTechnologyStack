import React, {PureComponent, Fragment} from 'react';
import { render } from 'react-dom';

// Redux start
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { counter } from './store/index.redux';
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



const Erying = () => {
  return <h2>二营</h2>
}

const Qibinglian = () => {
  return <h2>骑兵连</h2>
}

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

render(
  <Provider store={store}>
    <BrowserRouter>

      <Fragment>
        {/*点击跳转到指定路由*/}
        <ul>
          <li><Link to="/">一营</Link></li>
          <li><Link to="/erying">二营</Link></li>
          <li><Link to="/qibinglian">骑兵连</Link></li>
        </ul>

        <Switch>
          {/*只渲染命中第一个Route*/}

          {/*exact表明比如完全匹配*/}
          <Route path="/" exact component={App}></Route>
          {/*<Route path="/:location" component={Test}></Route>*/}
          <Route path="/erying" component={Erying}></Route>
          <Route path="/qibinglian" component={Qibinglian}></Route>
          {/*跳转页面*/}
          {/*<Redirect to='/qibinglian'></Redirect>*/}

          {/*如果你访问这个页面没有，就反回404*/}
          <Route path='/:location' component={Test}></Route>
        </Switch>




      </Fragment>
      {/*路由对应渲染模板*/}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

