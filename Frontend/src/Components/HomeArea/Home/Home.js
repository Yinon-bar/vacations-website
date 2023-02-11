import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DataSingle from "../DataArea/DataSingle/DataSingle";
import ListData from "../DataArea/ListData/ListData";
import "./Home.css";

function Home() {
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/vacations")
      .then((resp) => resp.json())
      .then((data) => setVacations(data));
  }, []);

  return (
    <div className="Home">
      <div className="Container">
        <Routes>
          <Route path="" element={<ListData vacations={vacations} />} />
          <Route path="/:id" element={<DataSingle vacations={vacations} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
