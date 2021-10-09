import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AsideBar from "./components/AsideBar";
import GlobalStyle, { Container } from "./styles/globals";

function App() {
  return (
    <>
      <BrowserRouter>
        <AsideBar />
        <GlobalStyle />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
