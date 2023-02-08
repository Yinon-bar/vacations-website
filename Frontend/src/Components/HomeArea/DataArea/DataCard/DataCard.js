import "./DataCard.css";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
// import img from "../../../../img/generic.png";

function DataCard({ vacation }) {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // }, []);
  console.log(vacation);

  return (
    <div className="DataCard">
      <img
        src={"http://localhost:3001/images/" + vacation.image}
        alt="destination"
      />
      <h2>{vacation.description}</h2>
      <h4>From: {vacation.start_date}</h4>
      <h4>To: {vacation.end_date}</h4>
      <h4>{vacation.destination}</h4>
      <h4>&#8362; {vacation.price}</h4>
      <div className="social">
        <button>
          <AiOutlineLike />
        </button>
      </div>
    </div>
  );
}

export default DataCard;
