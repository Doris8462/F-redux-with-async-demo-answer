import React, { Component } from 'react';
import Name from '../../components/Name';
import Greeting from '../../components/Greeting';
import Info from '../../components/Info';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App" data-testid="app">
        <Name />
        <Greeting />
        <Info />
      </div>
    );
  }
}

export default App;
