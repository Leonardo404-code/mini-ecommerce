import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/cart";
import { Creadits } from "./pages/Credits";
import { NewItem } from "./pages/NewItem";
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
            <Route exact path="/creditos" component={Creadits} />
            <Route exact path="/carrinho" component={Cart} />
            <Route exact path="/new-item" component={NewItem} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
