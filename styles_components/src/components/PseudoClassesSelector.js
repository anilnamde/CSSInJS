import React from 'react';
import styled from 'styled-components';

// Descendant Selector
// .someone

const Profile = styled.section`
  h1:hover{
    color:green;
  }
`;

export default function PseudoClassesComponent() {
  return (<Profile>
    <h1>Pseudo Classes Component</h1>
  </Profile>);
}
