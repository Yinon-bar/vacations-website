import "./Menu.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";

function Menu() {
  const { auth, setAuth } = useContext(AuthContext);
  // console.log(auth.user.user_name);

  function logout(e) {
    setAuth({ type: "logout" });
    sessionStorage.removeItem("user");
  }

  return (
    <div className="Menu">
      <h1>Travelly</h1>
      <div className="Content">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/vacations">Vacations list</NavLink>
        {auth?.user.role === "Admin" && (
          <>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
            <NavLink to="/admin">Admin</NavLink>
            <h4 className="userName">
              {"Hello "}
              {auth.user.user_name}
            </h4>
          </>
        )}
        {auth?.user.role === "User" && (
          <>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
            <h4 className="userName">
              {"Hello "}
              {auth.user.user_name}
            </h4>
          </>
        )}
        {!auth && (
          <>
            <NavLink to="/login">Login</NavLink>
          </>
        )}

        {/* <NavLink to="/signup">Sign up</NavLink> */}
      </div>
    </div>
  );
}

export default Menu;
