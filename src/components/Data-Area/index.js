import React, { useState, useEffect } from "react";
import DataTable from "../Data-Table";
import Nav from "../Nav";
import API from "../../utils/API";
import "./Data-Area.css";
import DataAreaContext from "../../utils/DataAreaContext";

const DataArea = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "ascend",
    filteredUsers: [],
    headings: [
      { name: "Image", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" },
    ],
  });
  const handleSort = (heading) => {
    if (developerState.order === "descend") {
      setDeveloperState({
        order: "ascend",
      });
    } else {
      setDeveloperState({
        order: "descend",
      });
    }
  };
};
