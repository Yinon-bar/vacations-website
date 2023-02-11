import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../AuthArea/Admin/Admin";
import Login from "../../AuthArea/Login/Login";
import Register from "../../AuthArea/Register/Register";
import Hero from "../../HomeArea/Hero/Hero";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/vacations/*" element={<Home />} />
      {/* <Route path="/vacations/:id" element={<DataSingle />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routing;
