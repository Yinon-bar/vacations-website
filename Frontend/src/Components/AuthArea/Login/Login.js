import { useContext, useState } from "react";
import "./Login.css";
import spinner from "../../../img/loading.gif";
import AuthContext from "../../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [uName, setUname] = useState("");
  const [password, setPassword] = useState(123456);
  const [loading, setLoading] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          user_name: uName,
          password: password,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setAuth({ type: "login", payload: data });
        })
        .catch((error) => console.log(error));
      setLoading();
      navigate("/vacations");
    }, 1000);
  }

  return (
    <div className="Login">
      <div className="Container">
        <div className="content">
          <h1>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              Enter your user name
              <input
                type="text"
                value={uName}
                onChange={(e) => setUname(e.target.value)}
              />
            </label>
            <label>
              Enter your password
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <input
              type="submit"
              className={loading && "active"}
              value="Login!"
            />
            <div className="linkToSign">
              <p>
                Not signup yet?
                <Link to={"/signup"}> Click here!</Link>
              </p>
            </div>
          </form>
          <div className="spinner">
            {loading && <img src={spinner} width="200px" alt="spinner" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
