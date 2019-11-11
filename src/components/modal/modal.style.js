import styled from 'styled-components';

export const ClickOutside = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
`;

export const Wrapper = styled.div`
    max-width: 800px;
`;
