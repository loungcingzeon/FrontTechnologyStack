import React, { PureComponent } from 'react';


// App
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

// 骑兵连
function 骑兵连(props){
  return <h2>骑兵连连长{ props.老大 }, 冲啊！</h2>
}

// 一营
class 一营 extends PureComponent{
  constructor(props){
    super(props);
    // 初始化一个状态
    this.state = {
      solders: ['虎子', '柱子', '王根生'],
    }
  }

  render (){
    return <div>
      <h2>一营营长，{this.props.老大}</h2>
      <ul>
        {
          this.state.solders.map((item, index) => {
            return <li key={index}>{index}·{item}</li>
          })
        }
      </ul>
    </div>
  }
}

export default App;