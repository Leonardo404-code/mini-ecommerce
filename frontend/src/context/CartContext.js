import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];
const localStorageTotal = JSON.parse(localStorage.getItem("total")) || 0;

export function CartProvider({ children }) {
  const [cart, setCart] = useState(localStorageCart);
  const [total, setTotal] = useState(localStorageTotal);
  const [totalConvert, setTotalConvert] = useState(0);

  const handleAddItem = (product, quant) => {
    let cartCopy = [...cart];

    const productWithQuant = {
      ID: product.ID,
      name: product.name,
      value: product.value * quant,
      quant: quant,
      photo: product.photo,
    };

    cartCopy.push(productWithQuant);

    setCart(cartCopy);

    const stringfy = JSON.stringify(cartCopy);

    localStorage.setItem("cart", stringfy);
  };

  const handleRemoveItem = (productId) => {
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((cartProduct) => cartProduct.ID !== productId);

    setCart(cartCopy);

    const stringfy = JSON.stringify(cartCopy);

    localStorage.setItem("cart", stringfy);
  };

  const handleClearCart = () => {
    let clearCart = [...cart];

    clearCart.splice(0, clearCart.length);

    setCart(clearCart);

    localStorage.removeItem("cart");
  };

  useEffect(() => {
    (() => {
      const getTotal = cart.map((values) => ({
        value: values.value,
      }));

      let totalPrice = getTotal.reduce(function (accumulator, item) {
        return accumulator + item.value;
      }, 0);

      setTotal(totalPrice);

      const stringfy = JSON.stringify(totalPrice);

      localStorage.setItem("total", stringfy);

      setTotalConvert(totalPrice * 100);
    })();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        handleAddItem,
        totalConvert,
        handleRemoveItem,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
