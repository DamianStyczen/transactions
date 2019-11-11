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

    ul {
        list-style: none;
        padding: 0;
    }
`;
export const Wrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;