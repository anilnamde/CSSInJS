import React from 'react';
import styled from 'styled-components';

// class selector
// .someone

const IDSelector = styled.div`
    #header {
        background-color: red;
        boder:1px solid green;
        font-size: 40px;
        text-align: center;
        padding: 40px;
    }
`;

export default function IDSelectorComponent() {
  return (<IDSelector>
    <div id="header"> {'ID Selector Construct'};
    </div>
  </IDSelector>);
}
