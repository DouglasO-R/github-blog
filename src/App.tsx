import { ThemeProvider } from "styled-components";
import { Link } from "./components/Link";
import { Search } from "./components/Search";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <div style={{ padding: "10rem" }}>
        <Search />
      </div>
    </ThemeProvider>
  )
}

export default App
