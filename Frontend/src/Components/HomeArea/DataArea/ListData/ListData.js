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
      const apiVacations = await axios("http://localhost:3001/api/vacations");
      console.log(apiVacations.data);
      const vacationsLiked = apiVacations.data.map((vacation) => {
        return {
          ...vacation,
          isLiked: !!apiLikes.data.find(
            (like) => like.vacation_id === vacation.id
          ),
        };
      });
      setLikes(apiLikes.data);
      setVacations(apiVacations.data);
      setLikedVacations(vacationsLiked);
      setApiData([likes, vacations]);
    };
    getApiData();
  }, []);
  console.log(likes);
  console.log(vacations);
  console.log(likedVacations);
  console.log(apiData);

  return (
    <div className="ListData">
      <div className="Container">
        <div className="content">
          {likedVacations.length ? (
            likedVacations.map((vacation) => (
              <DataCard key={vacation.id} vacation={vacation} />
            ))
          ) : (
            <h2>no info</h2>
          )}
        </div>
      </div>
    </div>
  );
}
export default ListData;
