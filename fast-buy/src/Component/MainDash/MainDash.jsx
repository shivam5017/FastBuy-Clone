import React from "react";
import Cards from "../Cards/Cards";
import TablePage from "../Table/Table";

import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <TablePage />
    </div>
  );
};

export default MainDash;