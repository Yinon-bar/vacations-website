import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="Menu">
      <h1>Travelly</h1>
      <div className="Content">
        <NavLink to="/">Vacations list</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </div>
    </div>
  );
}

export default Menu;
