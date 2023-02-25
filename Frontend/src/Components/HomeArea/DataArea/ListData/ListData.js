import { useContext, useEffect, useState } from "react";
import axios from "axios";
import DataContext from "../../../../Context/DataContext";
import DataCard from "../DataCard/DataCard";
import "./ListData.css";

function ListData() {
  // const [likesCheck, setLikesCheck] = useState(true);
  const [likes, setLikes] = useState([]);
  const [vacations, setVacations] = useState([]);
  const [likedVacations, setLikedVacations] = useState([]);
  const { apiData, setApiData } = useContext(DataContext);

  useEffect(() => {
    const getApiData = async () => {
      const apiLikes = await axios("http://localhost:3001/api/likes");
      setLikes(apiLikes.data);
      console.log(1);
      console.log(likes);
      const apiVacations = await axios("http://localhost:3001/api/vacations");
      setVacations(apiVacations.data);
      console.log(2);
      console.log(vacations);
      // setApiData([[...vacations], [...likes]]);
      const newData = await checkLikes(vacations);
      setLikedVacations(newData);
      console.log(3);
      console.log(likedVacations);
    };
    getApiData();
  }, []);
  // if (likesCheck) {
  //   checkLikes(vacations);
  // } else {
  //   console.log("inon");
  // }

  function checkLikes(data) {
    const vacationsLiked = data.map((vacation) => {
      return {
        ...vacation,
        // isLiked: true,
        isLiked: !!data.find((like) => like.vacation_id === vacation.id),
      };
    });
    return vacationsLiked;
  }
  // console.log(likes);
  // console.log(vacations);
  // console.log(likedVacations);
  // console.log(apiData);
  // console.log("--------------------------------------");

  return (
    <div className="ListData">
      <div className="Container">
        <div className="content">
          {likedVacations.map((vacation) => (
            <DataCard key={vacation.id} vacation={vacation} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ListData;
