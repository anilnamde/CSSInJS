import React from 'react';
import styled from 'styled-components';

// class selector
// .someone

const ClassBanner = styled.div`
    .header {
        background-color: red;
        boder:1px solid green;
        font-size: 40px;
        text-align: center;
        padding: 40px;
    }
`;

export default function ClassSelector() {
  return (<ClassBanner>
    <div className="header"> {'Class Selector Construct'}
    </div>
  </ClassBanner>);
}
