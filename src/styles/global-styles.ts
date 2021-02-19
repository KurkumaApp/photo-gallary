import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }
`;