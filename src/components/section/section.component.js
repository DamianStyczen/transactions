import React from 'react';
import { Wrapper, Title, Content } from './section.style';

const Section = ({ title, collapsable, children }) => {
return (
    <Wrapper collapsable={collapsable}>
        <Title>{ title }</Title>
        <Content>{ children }</Content>
    </Wrapper>
  );
}

export default Section;
