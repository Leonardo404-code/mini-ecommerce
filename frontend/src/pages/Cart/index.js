import { useContext } from "react";
import { Header } from "../../components/Header";
import { CartContext } from "../../context/CartContext";
import {
  ProductContainer,
  ProductSection,
} from "../../styles/pages/HomeStyled";
import { BuyContainer, NoItens } from "../../styles/pages/CartStyled";
import { MdNoPhotography, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
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
              <div className="no-image">
                <MdNoPhotography />
              </div>
            ) : (
              <img src={product.photo.url} alt="Imagem do produto" />
            )}
            <div>
              <p>{product.name}</p>
              <p>R$ {product.value.toFixed(2)}</p>
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
        <p>Total: R${total}</p>
        {cart.length < 1 ? (
          <Button onClick={handleCloseOrder} disabled="true">
            Fechar pedido
          </Button>
        ) : (
          <Button onClick={handleCloseOrder}>Fechar pedido</Button>
        )}
      </BuyContainer>
    </>
  );
}

// cart.length < 1 ? true : false
