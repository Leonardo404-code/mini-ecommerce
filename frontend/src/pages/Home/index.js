import { Header } from "../../components/Header";
import React, { useState, useContext } from "react";
import {
  ProductSection,
  ProductContainer,
  NoProducts,
} from "../../styles/pages/HomeStyled";
import NoImage from "../../images/no-image.png";
import { ProductModal } from "../../components/ProductModal";
import { ProductContext } from "../../context/ProductContext";
import { FaRegSadTear } from "react-icons/fa";
import NumberFormat from "react-number-format";
import { Pagination } from "../../components/Pagination";

export function Home() {
  const [idProduct, setIdProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const { filterProducts, pageCount } = useContext(ProductContext);

  const handleOpenProduct = (id) => {
    setShowModal(true);
    setIdProduct(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIdProduct(0);
  };

  return (
    <>
      <title>E-commerce || Home</title>
      <Header title="Home" />

      <ProductSection>
        {filterProducts.map((product) => (
          <ProductContainer
            key={String(product.ID)}
            onClick={() => handleOpenProduct(product.ID)}
          >
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
            <p className="units">{product.units} Unidades</p>
          </ProductContainer>
        ))}
      </ProductSection>
      {filterProducts.length < 1 ? (
        <NoProducts>
          <FaRegSadTear />
          <p>Produto não encontrado</p>
        </NoProducts>
      ) : null}

      <Pagination data={filterProducts} pageLimit={pageCount} dataLimit={10} />

      {showModal ? (
        <ProductModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          idProduct={idProduct}
        />
      ) : null}
    </>
  );
}
