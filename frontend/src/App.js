import React from "react";
import "react-notifications/lib/notifications.css";
import AsideBar from "./components/AsideBar";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle, { Container } from "./styles/globals";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { NotificationContainer } from "react-notifications";
import Routes from "./routes";

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
              <Routes />
            </Container>
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
