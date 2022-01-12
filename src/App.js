import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Blog from "./Routes/Blog";
import Home from "./Routes/Home";

function App() {
  return (
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
  );
}

export default App;
