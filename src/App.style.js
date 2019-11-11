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
    background: black;

}
`;
export const Wrapper = styled.main`
    padding: 20px;
    min-height: 100vh;
    max-width: 800px;
    margin: 0 auto;
`;