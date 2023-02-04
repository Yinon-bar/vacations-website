import { useState } from "react";
import "./Register.css";
import spinner from "../../../img/loading.gif";

function Register() {
  const [email, setEmail] = useState("yinonbar1988@gmail.com");
  const [password, setPassword] = useState(123456);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch("", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    // setLoading(false);
  }

  return (
    <div className="Register">
      <div className="Container">
        <div className="content">
          <h1>Sign up</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              Enter your email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              value="Sign up!"
            />
          </form>
          {loading && <img src={spinner} width="200px" alt="spinner" />}
        </div>
      </div>
    </div>
  );
}

export default Register;
