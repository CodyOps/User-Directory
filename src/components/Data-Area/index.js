//Import useState and useEffect from react
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

  //const to handle the sorting to either ascending or descending
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

    const compareFunction = (a, b) => {
      if (developerState.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };

    //set the filtered users to the sorted users const
    const sortedUsers = developerState.filteredUsers.sort(compareFunction);

    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
    });
  };

  const handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: filteredList,
    });
  };

  useEffect(() => {
    //get users from random user api
    API.getUsers().then((res) => {
      setDeveloperState({
        ...developerState,
        users: res.data.results,
        filteredUsers: res.data.results,
      });
    });
  }, []);

  return (
    //return dataareacontext and navbar
    <DataAreaContext.Provider
      value={{ developerState, handleSearchChange, handleSort }}
    >
      <Nav />
      <div className="data-area">
        {developerState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
      </div>
    </DataAreaContext.Provider>
  );
};

export default DataArea;
