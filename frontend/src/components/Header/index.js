import { HeaderElement, SeachInput } from "./styled";
import { FiSearch } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
export function Header({ title }) {
  const [showInput, setShowInput] = useState(false);
  const { search, setSearch } = useContext(ProductContext);

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  return (
    <HeaderElement>
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
        <Link to="/new-item/0">
          <MdAdd />
        </Link>
      </div>
    </HeaderElement>
  );
}
