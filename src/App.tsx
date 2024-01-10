import { GlobalStyle } from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";

function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <h1>Coffee Delivery</h1>
      </ThemeProvider>
  )
}

export default App
