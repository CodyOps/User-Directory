//Import in useContext, Data-body css and DataAreaContext
import React, { useContext } from "react";
import "./Data-Body.css";
import DataAreaContext from "../../utils/DataAreaContext";

const DataBody = () => {
  const context = useContext(DataAreaContext);

  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const styledDate = [month, day, year].join("-");
    return styledDate;
  }
};
