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
    // 第一种方式解决 绑定的问题
    //this.addSolder = this.addSolder.bind(this);
  }


  // 第三种方式解决 使用 箭头函数 () =>
  addSolder = () => {
    console.log('hello add solder');

    // 这里不是修改 state 而是返回一个新的 state 值
    this.setState({
      solders:[...this.state.solders, `新兵蛋子 ${Math.random()}`]
    })

    console.log(this.state.solders);
  }


  render (){
    return <div>
      <h2>一营营长，{this.props.老大}</h2>
      {/*<button onClick={this.addSolder}>新兵入伍</button>*/}

      {/* // 第二种方式解决 绑定的问题 使用 箭头函数 () => */}
      {/*<button onClick={() => this.addSolder() }>新兵入伍</button>*/}
      <button onClick={this.addSolder}>新兵入伍</button>
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