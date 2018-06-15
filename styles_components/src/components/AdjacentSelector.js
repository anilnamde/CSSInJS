import React from 'react';
import styled from 'styled-components';

// Adjasant Selector
// .someone

const Profile = styled.section`
    h2 + p {
      color: blue;
    }
  }
`;

export default function AdjacentComponent() {
  return (<Profile>
    <h1>Adjacent Selector</h1>
    <article>
      <h2>One</h2>
      <p>this is first article</p>
      <h2>Two</h2>
      <p>this is second article</p>
    </article>
  </Profile>);
}
