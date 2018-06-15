import React, { Component } from 'react';
import './App.css';
import ElementSelector from './components/TypeSelector';
import ClassSelector from './components/ClassSelector';
import IDSelector from './components/IDSelector';
import AttributeSelector from './components/AttributeSelector';
import DescendantSelector from './components/DescendantSelector';
import AdjacentSelector from './components/AdjacentSelector';
import GeneralSiblingSelector from './components/GeneralSiblingSelector';
import ChildCombinatorSelector from './components/ChildCombinatorSelector';
import PseudoElementSelector from './components/PseudoElementSelector';
import PseudoClassesSelector from './components/PseudoClassesSelector';

class App extends Component {
  render() {
    return (<div className="App">
      <ElementSelector />
      <ClassSelector />
      <IDSelector />
      <AttributeSelector />
      <DescendantSelector />
      <AdjacentSelector />
      <GeneralSiblingSelector />
      <ChildCombinatorSelector />
      <PseudoElementSelector />
      <PseudoClassesSelector />
    </div>
    );
  }
}

export default App;
