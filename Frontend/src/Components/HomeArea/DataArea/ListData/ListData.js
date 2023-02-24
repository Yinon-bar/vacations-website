import { useEffect, useState } from "react";
import DataCard from "../DataCard/DataCard";
import "./ListData.css";

function ListData({ vacations }) {
  const [likedVacations, setLikedVacation] = useState([]);

  console.log(vacations);
  useEffect(() => {
    if (vacations) {
      fetch("http://localhost:3001/api/likes")
        .then((resp) => resp.json(resp))
        .then((data) => checkLikes(data));
    }
  }, []);
  function checkLikes(data) {
    const vacationsLiked = vacations.map((vacation) => {
      return {
        ...vacation,
        isLiked: !!data.find((like) => like.vacation_id === vacation.id),
      };
    });
    setLikedVacation(vacationsLiked);
    console.log(vacationsLiked);
  }


  return (
    <div className="ListData">
      {console.log(likedVacations)}
      {likedVacations.map((vacation) => (
        <DataCard
          key={vacation.id}
          vacation={vacation}
        />
      ))}
    </div>
  );
}

export default ListData;
