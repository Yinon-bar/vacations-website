import "./Admin.css";
import { useState } from "react";
import spinner from "../../../img/loading.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [destination, setdestination] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [price, setPrice] = useState();
  const [loading, setLoading] = useState();

  function handleSubmit(e) {
    console.log(image);
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("description", description);
    formData.append("destination", destination);
    formData.append("image", image);
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);
    formData.append("price", price);
    setTimeout(() => {
      axios
        .post("http://localhost:3001/api/vacations", formData)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      setLoading();
      navigate("/");
    }, 2000);
  }

  return (
    <div className="Register">
      <div className="Container">
        <div className="content">
          <h1>Add new vacation</h1>
          <form encType="" onSubmit={(e) => handleSubmit(e)}>
            <label>
              Enter description
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Enter destination
              <input
                type="text"
                value={destination}
                onChange={(e) => setdestination(e.target.value)}
              />
            </label>
            <label>
              Insert image
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <label>
              Enter start date
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>
            <label>
              Enter end date
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
            <label>
              Enter price
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <input
              type="submit"
              className={loading && "active"}
              value="Add Vacation!"
            />
          </form>
          {loading && <img src={spinner} width="200px" alt="spinner" />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
