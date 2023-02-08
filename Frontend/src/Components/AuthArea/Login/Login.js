import { useContext, useState } from "react";
import "./Login.css";
import spinner from "../../../img/loading.gif";
import AuthContext from "../../../Context/AuthContext";

function Login() {
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
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      setLoading();
    }, 2000);
  }

  return (
    <div className="Register">
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
          </form>
          {loading && <img src={spinner} width="200px" alt="spinner" />}
        </div>
      </div>
    </div>
  );
}

export default Login;
