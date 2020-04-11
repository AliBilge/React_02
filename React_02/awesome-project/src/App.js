import React, { Component } from 'react';
import {Button, Icon, Input} from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>This is awsome</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Lorem doesn't work in Linux VS Code, I don't know why?</p>
        <Input placeholder='Search...' />
        <Button size="small" color="green">
          <Icon name="download" />
          download
        </Button>
      </div>
    );
  }
}

export default App;
