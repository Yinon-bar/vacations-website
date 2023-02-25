import "./Layout.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AuthContext from "../../../Context/AuthContext";
import DataContext from "../../../Context/DataContext";
import AuthReducer from "../../../Context/AuthReducer";
import { useReducer, useState } from "react";

function Layout() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [auth, setAuth] = useReducer(AuthReducer, user);
  const [apiData, setApiData] = useState([]);
  // console.log(auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <DataContext.Provider value={{ apiData, setApiData }}>
        <div className="Layout">
          <Header />
          <Main />
          <Footer />
        </div>
      </DataContext.Provider>
    </AuthContext.Provider>
  );
}

export default Layout;
