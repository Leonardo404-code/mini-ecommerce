import { HeaderElement } from "./styled";
import { FiSearch } from "react-icons/fi";
import { MdDarkMode, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
export function Header({ title }) {
  return (
    <HeaderElement>
      <h1>{title}</h1>

      <div>
        <FiSearch />
        <MdDarkMode />
        <Link to="/new-item/0">
          <MdAdd />
        </Link>
      </div>
    </HeaderElement>
  );
}
