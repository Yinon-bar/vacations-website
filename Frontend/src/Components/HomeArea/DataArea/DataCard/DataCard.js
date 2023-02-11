import "./DataCard.css";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { useContext, useState } from "react";
import AuthContext from "../../../../Context/AuthContext";
import { Link } from "react-router-dom";

function DataCard({ vacation }) {
  // console.log(vacation);

  const { auth } = useContext(AuthContext);
  const [like, setLike] = useState(false);

  function likeHandle(e) {
    if (auth) {
      console.log("Autenticated!");
      if (like === true) {
        setLike(false);
        // axios
      } else {
        setLike(true);
        // axios
      }
    } else {
      alert("No auth");
    }
  }

  function handleCard() {}

  return (
    <div className="DataCard" onClick={handleCard}>
      <div
        className="img"
        style={{
          backgroundImage: `url(${
            vacation.image === ""
              ? "http://localhost:3001/images/generic.png"
              : "http://localhost:3001/images/" + vacation.image
          })`,
        }}
      ></div>
      <h2>{vacation.destenation}</h2>
      <p>{vacation.description}</p>
      <h4>From: {vacation.start_date}</h4>
      <h4>To: {vacation.end_date}</h4>
      <h4>{vacation.destination}</h4>
      <h4>&#8362; {vacation.price}</h4>
      <div className="social">
        <button className="like" onClick={(e) => likeHandle(e)}>
          {like ? (
            <AiFillLike style={{ color: "var(--primary)" }} />
          ) : (
            <AiOutlineLike style={{ color: "var(--primary)" }} />
          )}
        </button>
        <button className="follow">Follow</button>
        {auth && (
          <button className="edit">
            <GrEdit />
          </button>
        )}
        <button className="like">
          <Link to={`${vacation.id}`}>More...</Link>
        </button>
      </div>
    </div>
  );
}

export default DataCard;
