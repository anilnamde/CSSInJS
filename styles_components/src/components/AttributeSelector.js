import React from 'react';
import styled from 'styled-components';

// attribute selector
// [href=some]

const AttributeSelector = styled.div`
    ul{
      text-align: left;
    }
    
    [iam=second] {
        color: red; 
    }

    [iam=first] {
        color: blue; 
    }    
`;

export default function AttributeSelectorComponent() {
  return (<AttributeSelector>
    <ul>
      <li iam="first">I am first</li>
      <li iam="second">I am second</li>
      <li>I am third</li>
    </ul>
  </AttributeSelector>);
}
