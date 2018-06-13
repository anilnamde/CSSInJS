import React from 'react';
import styled from 'styled-components';

// element selector
// h1, h2, header, section

const Banner = styled.header`
    background-color: yellow;
    boder:1px solid blue;
    font-size: 40px;
    text-align: center;
    padding: 40px;
`;

export default function TypeSelector() {
  return (<Banner > TypeSelector heading </Banner>);
}
