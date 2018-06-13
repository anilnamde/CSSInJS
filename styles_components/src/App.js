import React, { Component } from 'react';
import './App.css';
import ElementSelector from './components/TypeSelector';
import ClassSelector from './components/ClassSelector';
import IDSelector from './components/IDSelector';
import AttributeSelector from './components/AttributeSelector';

class App extends Component {
  render() {
    return (<div className="App">
      <ElementSelector />
      <ClassSelector />
      <IDSelector />
      <AttributeSelector />
    </div>
    );
  }
}

export default App;
