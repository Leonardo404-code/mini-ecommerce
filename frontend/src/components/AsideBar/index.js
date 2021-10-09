import { AsideBarContainer } from "./styled";
import { Link } from "react-router-dom";

export default function AsideBar() {
  return (
    <AsideBarContainer>
      <div>
        <h3>Client Name</h3>
        <p>100 produtos</p>
      </div>

      <nav>
        <Link to="/">Home</Link>
      </nav>
    </AsideBarContainer>
  );
}
