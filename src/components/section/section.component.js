import React from 'react';
import { Wrapper, Title, Content } from './section.style';

const Section = ({ title, children, small }) => {
    return (
        <Wrapper small={small}>
            <Title>{title}</Title>
            <Content>{children}</Content>
        </Wrapper>
    );
}

export default Section;
