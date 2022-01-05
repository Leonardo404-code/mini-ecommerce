import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { CartContext } from "../../context/CartContext";
import {
  ProductContainer,
  ProductSection,
} from "../../styles/pages/HomeStyled";
import { BuyContainer, NoItens } from "../../styles/pages/CartStyled";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import NoImage from "../../images/no-image.png";
import NumberFormat from "react-number-format";

export function Cart() {
  const { cart, total } = useContext(CartContext);

  const history = useHistory();

  const handleCloseOrder = () => {
    history.push("/payment");
  };

  return (
    <>
      <Header title="Carrinho" />
      <ProductSection>
        {cart.map((product) => (
          <ProductContainer key={String(product.ID)}>
            {product.photo.url === "" ? (
              <img src={NoImage} alt="Sem imagem" className="no-image" />
            ) : (
              <img src={product.photo.url} alt="Imagem do produto" />
            )}
            <div>
              <p>{product.name}</p>
              <NumberFormat
                displayType="text"
                thousandSeparator
                decimalSeparator="."
                value={product.value.toFixed(2)}
                prefix="R$ "
              />
            </div>
            <p className="units">Quantidade: {product.quant}</p>
          </ProductContainer>
        ))}
        {cart.length < 1 ? (
          <NoItens>
            <MdOutlineRemoveShoppingCart />
            <p>Adicione itens ao seu carrinho</p>
          </NoItens>
        ) : null}
      </ProductSection>
      <BuyContainer>
        <NumberFormat
          displayType="text"
          thousandSeparator
          decimalSeparator="."
          value={total.toFixed(2)}
          prefix="R$ "
        />
        {cart.length < 1 ? (
          <Button disabled="true">Fechar pedido</Button>
        ) : (
          <Button onClick={handleCloseOrder}>Fechar pedido</Button>
        )}
      </BuyContainer>
    </>
  );
}
