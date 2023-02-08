import { ThemeProvider } from "styled-components";
import { Card } from "./components/Card";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <div style={{ padding: "10rem" }}>
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
