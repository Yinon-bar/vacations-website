import { useParams } from "react-router-dom";
import "./DataSingle.css";

function DataSingle({ vacations }) {
  const { id } = useParams();
  const selectedVaction = vacations.find((v) => v.id === +id);
  console.log(selectedVaction);

  return (
    <div className="DataSingle">
      <div className="Container">
        <div className="Content">
          <div className="CardContent">
            <div
              className="img"
              style={{
                backgroundImage: `url(${
                  selectedVaction.image === ""
                    ? "http://localhost:3001/images/generic.png"
                    : "http://localhost:3001/images/" + selectedVaction.image
                })`,
              }}
            ></div>
            <h1>{selectedVaction.description}</h1>
            <h1>{selectedVaction.destenation}</h1>
            <h2>{selectedVaction.start_date}</h2>
            <h2>{selectedVaction.end_date}</h2>
            <h2>&#8362; {selectedVaction.price}</h2>
            <h3>Peaple like this vacation: {selectedVaction.followers}</h3>
            <button>Order now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataSingle;
