import { rem } from 'polished'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    padding-bottom: ${rem(100)};
  }

  body, input, textarea, button {
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
  }

  button {
    border: none;
    cursor: pointer;
  }
`