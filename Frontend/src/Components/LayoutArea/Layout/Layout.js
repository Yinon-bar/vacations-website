import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
