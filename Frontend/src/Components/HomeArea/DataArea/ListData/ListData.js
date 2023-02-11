import DataCard from "../DataCard/DataCard";
import "./ListData.css";

function ListData({ vacations }) {
  return (
    <div className="ListData">
      {vacations.map((vacation) => (
        <DataCard key={vacation.id} vacation={vacation} />
      ))}
    </div>
  );
}

export default ListData;
