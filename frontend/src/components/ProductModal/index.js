import { NewModal } from "../Modal";
import { useLayoutEffect, useState, useContext } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
  AiOutlineShopping,
} from "react-icons/ai";
import { ProductContainer, CloseIcon } from "./styled";
import { Button } from "../Button";
import { CartContext } from "../../context/CartContext";
import { useHistory } from "react-router-dom";

export function ProductModal({ showModal, handleCloseModal, idProduct }) {
  const [product, setProduct] = useState(undefined);

  const [quant, setQuant] = useState(1);

  const history = useHistory();

  const { handleAddItem } = useContext(CartContext);

  useLayoutEffect(() => {
    (async () => {
      await fetch(`http://localhost:8080/product/${idProduct}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((err) => console.log(err));
    })();
  }, [idProduct]);

  const handleAddToCart = () => {
    handleAddItem(product, quant);
  };

  const handleBuyItem = () => {
    history.push("/cart");
  };

  return (
    <NewModal isOpen={showModal} contentLabel="Show product">
      <CloseIcon align="right">
        <AiOutlineCloseCircle onClick={handleCloseModal} size={40} />
      </CloseIcon>
      {product === undefined ? null : (
        <>
          <ProductContainer>
            <section className="info-top">
              <img src={product.photo.url} alt="imagem do produto" />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p>R$ {product.value.toFixed(2)}</p>
                <p>Unidades: {product.units}</p>
                <p>
                  Quant:{" "}
                  <input
                    value={quant}
                    type="number"
                    onChange={(e) => setQuant(e.target.value)}
                  />{" "}
                </p>
                <p>Total: {product.value * quant}</p>
              </div>
            </section>
            <section className="info-down">
              <div className="product-info-two">
                <p>Descrição</p>
                {product.description === "" ? (
                  <p>Este produto não tem descrição</p>
                ) : (
                  <p>{product.description}</p>
                )}
              </div>

              <div className="actions">
                <Button type="button" onClick={handleAddToCart}>
                  <AiOutlineShoppingCart size={35} /> Adicionar ao carrinho
                </Button>
                <Button type="button" onClick={handleBuyItem}>
                  <AiOutlineShopping size={35} />
                  Comprar
                </Button>
              </div>
            </section>
          </ProductContainer>
        </>
      )}
    </NewModal>
  );
}
