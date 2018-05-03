import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SampleHeader} from './components/sampleheader'
import {Home} from './components/home'

class App extends Component {
  render() {
    let user = {
      nationality:"Indian",
      hobbies:[1,2,3,4,5,6,7,8]
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
        <button className="btn btn-primary">
          Bootstrap Button
        </button>
        <div className="row">
          <SampleHeader />
        </div>
        <div className="row">
          <Home user={user}/>
        </div>
      </div>
    );
  }
}

export default App;
