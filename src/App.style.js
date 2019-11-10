import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStylesProvider = createGlobalStyle`
* {
    box-sizing: border-box;
};

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;
export const Wrapper = styled.main`
    padding: 20px;
    background: whitesmoke;
    min-height: 100vh;
`;