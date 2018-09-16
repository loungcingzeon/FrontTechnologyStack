import React, { PureComponent } from 'react';

class App extends PureComponent{

  render(){
    const  boss = '李云龙';
    return (
      <div>
        <h1>独立团 { boss }</h1>
        <一营 老大="张大喵"/>
        <骑兵连 老大="孙德胜"/>
      </div>
    );
  }
}

function 骑兵连(props){
  return <h2>骑兵连连长{ props.老大 }, 冲啊！</h2>
}

class 一营 extends PureComponent{
  render (){
    return <h2>一营营长，{this.props.老大}</h2>
  }
}

export default App;