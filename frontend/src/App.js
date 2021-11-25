import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Creadits } from "./pages/Credits";
import { NewItem } from "./pages/NewItem";
import AsideBar from "./components/AsideBar";
import GlobalStyle, { Container } from "./styles/globals";
import { CartProvider } from "./context/CartContext";
import { Payment } from "./pages/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <AsideBar />
          <GlobalStyle />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/credits" component={Creadits} />
              <Route exact path="/cart" component={Cart} />
              <Route path="/new-item/:id" component={NewItem} />
              <Route path="/payment" component={Payment} />
            </Switch>
          </Container>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
