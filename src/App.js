import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Blog from "./Routes/Blog";
import Home from "./Routes/Home";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom, blogListAtom } from "./recoil";
import { createGlobalStyle } from "styled-components";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import "./style/font.css";

const GlobalStyle = createGlobalStyle`
body {
  font-family: "OTWelcomeBA";
	margin:0;
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

  const setBlogList = useSetRecoilState(blogListAtom);

  useEffect(() => {
    const list = function importAll() {
      const result = require.context(`./MDs`);
      let files = {};
      result.keys().map((item, index) => {
        files[item.slice(2, -3)] = result(item);
      });
      return files;
    };
    setBlogList(list);
  }, []);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Header />
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
