import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [totalConvert, setTotalConvert] = useState(0);

  const sumValuesOfCart = () => {
    const getTotal = cart.map((values) => ({
      value: values.value,
    }));

    let totalPrice = getTotal.reduce(function (accumulator, item) {
      return accumulator + item.value;
    }, 0);

    setTotal(totalPrice);
    setTotalConvert(totalPrice * 100);
  };

  const handleAddItem = (product, quant) => {
    const productWithQuant = {
      ID: product.ID,
      name: product.name,
      value: product.value * quant,
      quant: quant,
      photo: product.photo,
    };

    cart.push(productWithQuant);

    setCart(cart);

    sumValuesOfCart();
  };

  return (
    <CartContext.Provider value={{ cart, total, handleAddItem, totalConvert }}>
      {children}
    </CartContext.Provider>
  );
}
