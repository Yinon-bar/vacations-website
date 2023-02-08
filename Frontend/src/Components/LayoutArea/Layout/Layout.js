import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import AuthContext from "../../../Context/AuthContext";
import { useReducer } from "react";
import AuthReducer from "../../../Context/AuthReducer";

function Layout() {
  const [auth, setAuth] = useReducer(AuthReducer, {});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <div className="Layout">
        <Header />
        <Main />
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default Layout;
