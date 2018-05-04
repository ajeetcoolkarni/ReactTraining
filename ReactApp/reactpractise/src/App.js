import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SampleHeader} from './components/sampleheader'
import {Home} from './components/home'
import {Rout} from './components/route'

class App extends Component {
  constructor(props){
    console.log('constructor');
    super(props);
    this.state = {
      headerLinkName : 'Home',
      showHome:true
    }
  }

  componentWillMount(){
    console.log('will mount');
}

componentDidMount(){
    console.log('did mount');
}

componentWillReceiveProps(newProps){
    console.log('receive props');
    console.log(newProps);
}

shouldComponentUpdate(props, state){
    console.log('should update');
    console.log(props);
    console.log(state);
    return true;
}

componentWillUpdate(){
    console.log('will update');
}

componentDidUpdate(){
    console.log('did update');
}
  sayHello(){
    alert('Hello!!');
  }
  takeValue(val){
    this.setState({
      headerLinkName : val
    })
  }
  toggleHomeComponent(){
    this.setState({
      showHome : !this.state.showHome
    })
  }
  render() {
    console.log('render');
    let user = {
      nationality:"Indian",
      hobbies:[1,2,3,4,5,6,7,8],
      age:27
    }
    let home = '';
    if(this.state.showHome){
      home = ( <Home user={user} triggerHello={()=>this.sayHello()}
              sendValue={(val)=>this.takeValue(val)}>
              <p>This is home paragrph</p>
              </Home>);
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn btn-primary" onClick={()=>this.toggleHomeComponent()}>
          Toggle Home
        </button>
        <div className="row">
          <SampleHeader headerLinkName = {this.state.headerLinkName} />
        </div>
        <div className="row">
         {home}
        </div>
        <div className="row">
        <Rout removeHome={(val=>{})}/>
        </div>
      </div>
    );
  }
}

export default App;
