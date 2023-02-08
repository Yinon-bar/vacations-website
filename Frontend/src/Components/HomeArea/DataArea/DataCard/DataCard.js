import "./DataCard.css";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

function DataCard({ vacation }) {
  console.log(vacation);

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
