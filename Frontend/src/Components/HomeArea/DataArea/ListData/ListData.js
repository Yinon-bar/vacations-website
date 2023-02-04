import { useEffect, useState } from "react";
import DataCard from "../DataCard/DataCard";
import "./ListData.css";

function ListData() {
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/vacations")
      .then((resp) => resp.json())
      .then((data) => setVacations(data));
  }, []);

  return (
    <div className="ListData">
      {vacations.map((vacation) => (
        <DataCard key={vacation.id} vacation={vacation} />
      ))}
    </div>
  );
}

export default ListData;
