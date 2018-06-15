import React from 'react';
import styled from 'styled-components';

// Descendant Selector
// .someone

const Profile = styled.section`
  article > h2{
    color: blue;
  }
  article > div {
    color: red;
  }
  article > div > span {
    color: green;
  }
`;

export default function ChildCombinatorComponent() {
  return (<Profile>
    <h1>Descendant Selector</h1>
    <article>
      <h2>One</h2>
      <div>
        this is first article
        <span>I am GREEN 1 </span>
        <span>I am GREEN 2 </span>
      </div>
      <h2>Two</h2>
      <div>this is second article</div>
    </article>
  </Profile>);
}
