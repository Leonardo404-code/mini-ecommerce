import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import {
  ProductSection,
  ProductContainer,
} from "../../styles/pages/HomeStyled";
import { MdNoPhotography } from "react-icons/md";

export function Home() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:8080/products?page=1", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((productsJson) => {
          const { data } = productsJson;
          setProduct(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  return (
    <>
      <Header title="Home" />
      <ProductSection>
        {products.map((product) => (
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
            <p className="units">{product.units} unidades</p>
          </ProductContainer>
        ))}
      </ProductSection>
    </>
  );
}
