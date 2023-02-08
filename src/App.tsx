import { ThemeProvider } from "styled-components";
import { List } from "./components/List";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <div style={{ padding: "10rem" }}>
        <List />
      </div>
    </ThemeProvider>
  )
}

export default App
