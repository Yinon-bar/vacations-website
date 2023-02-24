import { useContext, useState } from "react";
import "./Register.css";
import spinner from "../../../img/loading.gif";
import AuthContext from "../../../Context/AuthContext";

function Register() {
  const { setAuth } = useContext(AuthContext);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [uName, setUname] = useState("");
  const [password, setPassword] = useState(123456);
  const [loading, setLoading] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          first_name: fName,
          last_name: lName,
          user_name: uName,
          password: password,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setAuth({ type: "register", payload: data });
        })
        .catch((error) => console.log(error));
      setLoading();
    }, 2000);
  }

  return (
    <div className="Register">
      <div className="Container">
        <div className="content">
          <h1>Sign up</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              Enter your first name
              <input
                type="text"
                value={fName}
                onChange={(e) => setFname(e.target.value)}
              />
            </label>
            <label>
              Enter your last name
              <input
                type="text"
                value={lName}
                onChange={(e) => setLname(e.target.value)}
              />
            </label>
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
