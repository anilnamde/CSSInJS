import React from 'react';
import styled from 'styled-components';

// Descendant Selector
// .someone

const Profile = styled.section`
  p{
    text-align:left;
  }
  p:first-letter {
    font-size:50px;
    font-weight:bold;
  }
`;

export default function PseudoElementComponent() {
  return (<Profile>
    <h1>Pseudo Element Selector</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id porta nibh venenatis. Congue quisque egestas diam in arcu cursus euismod quis. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Nibh venenatis cras sed felis eget velit aliquet. Sed viverra ipsum nunc aliquet bibendum. Mattis pellentesque id nibh tortor id aliquet lectus proin. Venenatis urna cursus eget nunc. Vitae ultricies leo integer malesuada. Auctor eu augue ut lectus arcu. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. In fermentum et sollicitudin ac orci phasellus egestas. Nibh tortor id aliquet lectus. Ornare arcu dui vivamus arcu felis bibendum ut tristique et.</p>
  </Profile>);
}
