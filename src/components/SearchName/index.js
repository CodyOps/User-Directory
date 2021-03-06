//Import in useContext, DataAreaContext and SearchName css
import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";
import "./SearchName.css";

//function to return searchbox and button
const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => context.handleSearchChange(event)}
        />
        <button className="btn my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchName;
