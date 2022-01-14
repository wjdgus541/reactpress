import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Blog from "./Routes/Blog";
import Home from "./Routes/Home";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./recoil";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
	margin:0;
	height: 90vh;
	width: 100vw;
  color: ${(props) => props.theme.textColor};
  background-color:${(props) => props.theme.bgColor};
  overflow-x: hidden;
}
ul {
  padding: 0;
}
a {
	text-decoration:none;
	color: inherit;
}
p {
  margin: 0;
}
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route path={["/blog", "/blog/main"]}>
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
