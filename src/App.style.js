import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStylesProvider = createGlobalStyle`
* {
    box-sizing: border-box;
};
`;
export const Wrapper = styled.main`
    padding: 20px;
    background: whitesmoke;
    min-height: 100vh;
`;