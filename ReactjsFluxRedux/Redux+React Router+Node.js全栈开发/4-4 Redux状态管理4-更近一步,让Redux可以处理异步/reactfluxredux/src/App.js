import React, { PureComponent, Fragment } from 'react';
import { Button } from 'antd-mobile';

// App
class App extends PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    const store = this.props.store;
    const num = store.getState();  // 读取数据
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync;
    return (
      <Fragment>
        <h1>现在有机枪 {num} 把</h1>
        <Button onClick={() => store.dispatch(addGun())}>申请武器</Button>
        <Button onClick={() => store.dispatch(removeGun())}>上交武器</Button>
        <Button onClick={() => store.dispatch(addGunAsync())}>拖两天再给</Button>
      </Fragment>
    );
  }
}


export default App;