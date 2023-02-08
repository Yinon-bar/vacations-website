import "./Header.css";
import Menu from "../Menu/Menu";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";

function Header() {
  const name = useContext(AuthContext);

  return (
    <div className="Header">
      <div className="Container">
        <Menu />
        Context: {name}
      </div>
    </div>
  );
}

export default Header;
