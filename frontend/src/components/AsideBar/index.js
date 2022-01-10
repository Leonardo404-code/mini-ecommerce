import { AsideBarContainer, AsideBarNavigation } from "./styled";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import React, { useContext } from "react";

export default function AsideBar() {
  const { filterProducts } = useContext(ProductContext);

  return (
    <AsideBarContainer>
      <AsideBarNavigation>
        <div>
          <p>{filterProducts.length} produtos encontrados</p>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Carrinho</Link>
          <Link to="/credits">Créditos</Link>
        </nav>
      </AsideBarNavigation>
    </AsideBarContainer>
  );
}
