import { NewModal } from "../Modal";
import React, { useLayoutEffect, useState, useContext } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
  AiOutlineShopping,
} from "react-icons/ai";
import { NotificationManager } from "react-notifications";
import { ProductContainer, CloseIcon } from "./styled";
import { Button } from "../Button";
import { CartContext } from "../../context/CartContext";
import { useHistory } from "react-router-dom";
import NoImage from "../../images/no-image.png";
import NumberFormat from "react-number-format";

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
    NotificationManager.success("Item adicionado ao carrinho");
    handleAddItem(product, quant);
  };

  const handleBuyItem = () => {
    handleAddItem(product, quant);
    history.push("/cart");
  };

  return (
    <NewModal isOpen={showModal} contentLabel="Show product">
      <CloseIcon>
        <AiOutlineCloseCircle onClick={handleCloseModal} size={40} />
      </CloseIcon>
      {product === undefined ? null : (
        <>
          <ProductContainer>
            <section className="info-top">
              {product.photo.url === "" ? (
                <img src={NoImage} alt="Sem imagem" className="no-image" />
              ) : (
                <img src={product.photo.url} alt="Imagem do produto" />
              )}
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
                    min="1"
                    max={product.units}
                  />{" "}
                </p>

                <NumberFormat
                  displayType="text"
                  thousandSeparator
                  decimalSeparator="."
                  value={product.value * quant}
                  prefix="Total: "
                />
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
                  <AiOutlineShoppingCart /> Adicionar ao carrinho
                </Button>
                <Button type="button" onClick={handleBuyItem}>
                  <AiOutlineShopping />
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
