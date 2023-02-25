import "./DataCard.css";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../Context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import DataContext from "../../../../Context/DataContext";

function DataCard({ vacation }) {
  const { auth } = useContext(AuthContext);
  const [like, setLike] = useState(null);
  const { apiData, setApiData } = useContext(DataContext);

  useEffect(() => {
    console.log(vacation);
    if (vacation.isLiked) {
      setLike(true);
    } else {
      // setLike(true);
    }
  }, []);

  function likeHandle(e) {
    if (auth) {
      if (!vacation.isLiked) {
        setLike(false);
        const user = auth[0];
        const data = { user, vacation };
        axios
          .post("http://localhost:3001/api/likes", data)
          .then((data) => console.log(data.data))
          .catch((error) => console.log(error));
      } else {
        setLike(true);
        const userId = auth[0].id;
        const currentVacation = { ...vacation };
        axios
          .post("http://localhost:3001/api/likes/" + userId, currentVacation)
          .then((data) => {
            // console.log(data.data);
            deleteLike(data.data[0].id);
          })
          .catch((error) => console.log(error));
        function deleteLike(likeID) {
          axios
            .delete("http://localhost:3001/api/likes/" + likeID)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        }
      }
    } else {
      alert("No auth");
    }
  }

  return (
    <div className="DataCard">
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
      <h4>ID: {vacation.id}</h4>
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
