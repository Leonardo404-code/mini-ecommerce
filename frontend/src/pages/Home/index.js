import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import {
  ProductSection,
  ProductContainer,
} from "../../styles/pages/HomeStyled";
import { MdNoPhotography } from "react-icons/md";
import {} from "react-router-dom";
import { ProductModal } from "../../components/ProductModal";
import { FiSearch } from "react-icons/fi";
import { MdDarkMode, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export function Home() {
  const [products, setProducts] = useState([]);
  const [idProduct, setIdProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:8080/products?page=1&product_name=", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((productsJson) => {
          const { data } = productsJson;
          setProducts(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  const handleOpenProduct = (id) => {
    setShowModal(true);
    setIdProduct(id);
  };

  const hnadleCloseModal = () => {
    setShowModal(false);
    setIdProduct(0);
  };

  return (
    <>
      <Header title="Home" />

      <ProductSection>
        {products.map((product) => (
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
          handleCloseModal={hnadleCloseModal}
          idProduct={idProduct}
        />
      ) : null}
    </>
  );
}
