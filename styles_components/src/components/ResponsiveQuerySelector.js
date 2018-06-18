import React from 'react';
import styled from 'styled-components';

// Responsive Query Selector
// .someone

const Profile = styled.section`
    color: green;
    @media only screen and (max-width: 1400px) {
        h1{
            color: red;
        }
    }
    
    @media only screen and (max-width: 1000px) {
        h1{
            color: yellow;
        }
    }
`;

export default function ResponsiveQueryComponent() {
  return (<Profile >
    <h1 > Responsive Query Selector </h1>
  </Profile >);
}
