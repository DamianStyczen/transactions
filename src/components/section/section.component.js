import React from 'react';
import { Wrapper } from './section.style';

const Section = ({ title, collapsable, children }) => {
return (
    <Wrapper collapsable={collapsable}>
        <h2>{ title }</h2>
        { children }
    </Wrapper>
  );
}

export default Section;
