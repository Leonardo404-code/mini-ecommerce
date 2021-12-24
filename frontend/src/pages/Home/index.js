import { Header } from "../../components/Header";
import { useState, useContext } from "react";
import {
  ProductSection,
  ProductContainer,
} from "../../styles/pages/HomeStyled";
import { MdNoPhotography } from "react-icons/md";
import { ProductModal } from "../../components/ProductModal";
import { ProductContext } from "../../context/ProductContext";

export function Home() {
  const [idProduct, setIdProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const { filterProducts } = useContext(ProductContext);

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
      <Header title="Home" />

      <ProductSection>
        {filterProducts.map((product) => (
          <ProductContainer
            key={String(product.ID)}
            onClick={() => handleOpenProduct(product.ID)}
          >
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
            <p className="units">{product.units} unidades</p>
          </ProductContainer>
        ))}
      </ProductSection>
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
