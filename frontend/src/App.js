import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globals";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
