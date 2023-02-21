import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 100vh;
  }
`
