import React from "react";
import "react-notifications/lib/notifications.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Creadits } from "./pages/Credits";
import { NewItem } from "./pages/NewItem";
import AsideBar from "./components/AsideBar";
import GlobalStyle, { Container } from "./styles/globals";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { Payment } from "./pages/Payment";
import { AddPhoto } from "./pages/AddPhoto";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <CartProvider>
            <AsideBar />
            <GlobalStyle />
            <NotificationContainer />
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/credits" component={Creadits} />
                <Route exact path="/cart" component={Cart} />
                <Route path="/new_item/" component={NewItem} />
                <Route path={"/add_photo/:id"} component={AddPhoto} />
                <Route path="/payment" component={Payment} />
              </Switch>
            </Container>
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
