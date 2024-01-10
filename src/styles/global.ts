import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 800;
  }

  button {
    border: none;
    cursor: pointer;
  }
`