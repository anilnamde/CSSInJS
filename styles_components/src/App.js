import React, { Component } from 'react';
import './App.css';
import ElementSelector from './components/ElementSelector';
import ClassSelector from './components/ClassSelector';

class App extends Component {
  render() {
    return (<div className="App">
        <ElementSelector />
        <ClassSelector />
      </div>
    );
  }
}

export default App;
