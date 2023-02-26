import "./DataCard.css";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../Context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import DataContext from "../../../../Context/DataContext";

function DataCard({ vacation }) {
  const { auth } = useContext(AuthContext);
  const [like, setLike] = useState(null);
  // const [insertedId, setInsertedId] = useState(null);
  const { apiData, setApiData } = useContext(DataContext);

  useEffect(() => {
    if (vacation.isLiked) {
      setLike(true);
    }
  }, []);

  function likeHandle(e) {
    if (auth?.user.role === "User") {
      if (!vacation.isLiked) {
        // console.log(vacation);
        vacation.isLiked = true;
        setLike(true);
        const user = auth[0];
        const data = { user, vacation };
        const getApiData = async () => {
          const result = await axios
            .post("http://localhost:3001/api/likes", data)
            .then((data) => {
              console.log(data.data.insertId);
              return data.data.insertId;
            })
            .catch((error) => console.log(error));
          // setInsertedId(result);
          setApiData([
            ...apiData,
            {
              id: result,
              user_id: data.user.id,
              vacation_id: data.vacation.id,
            },
          ]);
        };
        getApiData();
        // console.log(insertedId);
        console.log(apiData);
      } else {
        setLike(false);
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
          // פה צריך להכניס מחיקה
          // setApiData(apiData.splice());
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
        {auth?.user.role === "User" && (
          <button className="like" onClick={(e) => likeHandle(e)}>
            {like ? (
              <AiFillLike style={{ color: "var(--primary)" }} />
            ) : (
              <AiOutlineLike style={{ color: "var(--primary)" }} />
            )}
          </button>
        )}
        {auth?.user.role === "User" && (
          <button className="follow">Follow</button>
        )}
        {auth?.user.role === "Admin" && (
          <button className="edit">
            <GrEdit />
          </button>
        )}
        {auth?.user.role === "Admin" && (
          <button className="delete">
            <MdDeleteForever />
          </button>
        )}
        <button className="more">
          <Link to={`${vacation.id}`}>More...</Link>
        </button>
      </div>
    </div>
  );
}

export default DataCard;
