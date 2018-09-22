import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import {addGun, removeGun, addGunAsync} from './store/index.redux';
import { Button } from 'antd-mobile';



/*const mapStateToProps = (state) => {
  return {num:state}
};

const actionCreators = {addGun, removeGun, addGunAsync};
App = connect(mapStateToProps, actionCreators)(App);*/

// 装饰器
@connect(
  // 第一个参数：你要state什么属性，放到 props
  state=>({num:state}),
  // 第二个参数，你要什么方法，放到props里，自动 dispatch
  {addGun, removeGun, addGunAsync}
)

// App
class App extends PureComponent{
  render(){
    return (
      <Fragment>
        <h1>现在有机枪 {this.props.counter} 把</h1>
        <Button onClick={this.props.addGun}>申请武器</Button>
        <Button onClick={this.props.removeGun}>上交武器</Button>
        <Button onClick={this.props.addGunAsync}>拖两天再给</Button>
      </Fragment>
    );
  }
}

/**
 *
 * connect有两个参数
 * 第一参数是什么数据
 * 第二个是 action 操作状态
 */
/*const mapStateToProps = (state) => {
  return {num:state}
};

const actionCreators = {addGun, removeGun, addGunAsync};
App = connect(mapStateToProps, actionCreators)(App);*/

export default App;
