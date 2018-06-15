import React from 'react';
import styled from 'styled-components';

// Adjasant Selector
// .someone

const Profile = styled.section`
    h2 ~ p {
      color: blue;
    }
  }
`;

export default function GeneralSiblingComponent() {
  return (<Profile>
    <h1>Adjacent Selector</h1>
    <article>
      <p>this is the title paragraph</p>
      <h2>One</h2>
      <p>this is first article 1</p>
      <p>this is first article 2</p>
      <p>this is first article 3</p>
      <h2>Two</h2>
      <p>this is second article</p>
    </article>
  </Profile>);
}
