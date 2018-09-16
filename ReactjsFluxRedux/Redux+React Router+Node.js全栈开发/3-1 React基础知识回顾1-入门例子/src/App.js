import React, { PureComponent } from 'react';

class App extends PureComponent{

  render(){
    const  boss = '李云龙';
    return (
      <div>
        <h1>独立团 { boss }</h1>
        <一营/>
      </div>
    );
  }
}

class 一营 extends PureComponent{
  render (){
    const boss = '张大喵';
    return <h2>一营营长，{boss}</h2>
  }
}

export default App;