import React, { useContext, useState } from "react";
import {
  HeaderElement,
  SeachInput,
  BurgerMenu,
  MenuMobile,
  NavigationMobile,
} from "./styled";
import { FiSearch } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export function Header({ title }) {
  const [showInput, setShowInput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { search, setSearch, products } = useContext(ProductContext);

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  const OpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderElement isShow={showInput}>
      <MenuMobile>
        <BurgerMenu menuActivate={menuOpen} onClick={OpenMenu}>
          <div className="top" />
          <div className="middle" />
          <div className="bottom" />
        </BurgerMenu>

        <NavigationMobile menuActivate={menuOpen}>
          <div>
            <p>{products.length} produtos encontrados</p>
          </div>
          <Link to="/">Home</Link>
          <Link to="/cart">Carrinho</Link>
          <Link to="/credits">Creditos</Link>
        </NavigationMobile>
      </MenuMobile>

      <h1>{title}</h1>

      <div>
        <div className="search-container">
          <SeachInput
            isShow={showInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch onClick={handleShowInput} />
        </div>
        <Link to="/new_item/">
          <MdAdd />
        </Link>
      </div>
    </HeaderElement>
  );
}
