import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../Context/AuthContext";
// import { Route, Routes } from "react-router-dom";
import DataCard from "../DataCard/DataCard";
// import DataSingle from "../DataSingle/DataSingle";
import "./ListData.css";

function ListData() {
  // const [likedVacations, setLikedVacation] = useState([]);

  const [likes, setLikes] = useState([]);
  const [vacations, setVacations] = useState([]);
  const [likedVacations, setLikedVacations] = useState([]);
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:3001/api/likes")
      .then((resp) => resp.json(resp))
      .then((data) => setLikes(data));
    fetch("http://localhost:3001/api/vacations")
      .then((resp) => resp.json())
      .then((data) => setVacations(data));
    // console.log("inon");
  }, []);
  if (likes.length && vacations.length && !likedVacations.length) {
    checkLikes(vacations);
  }

  function checkLikes(data) {
    const vacationsLiked = data.map((vacation) => {
      return {
        ...vacation,
        // isLiked: true,
        isLiked: !!data.find((like) => like.vacation_id === vacation.id),
      };
    });
    setLikedVacations(vacationsLiked);
  }

  return (
    <div className="ListData">
      <div className="Container">
        <div className="content">
          {/* {console.log(likedVacations)} */}
          {likedVacations.map((vacation) => (
            <DataCard key={vacation.id} vacation={vacation} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ListData;
