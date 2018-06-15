import React from 'react';
import styled from 'styled-components';

// Descendant Selector
// .someone

const Profile = styled.section`
  article {
    h2 {
      color: blue;
    }
  }
`;

export default function DescendantComponent() {
  return (<Profile>
    <h1>Descendant Selector</h1>
    <article>
      <h2>One</h2>
      <p>this is first article</p>
      <h2>Two</h2>
      <p>this is second article</p>
    </article>
  </Profile>);
}
