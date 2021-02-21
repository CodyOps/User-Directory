//import in react and header.css
import React from "react";
import "./Header.css";

//function to return the header component
function Header() {
  return (
    <div className="header">
      <h1>Employee Directory Portal</h1>
      <h3>Search for any Employee!</h3>
      <p>
        Use the search box to narrow your results, or click on each heading to
        filter by section.
      </p>
    </div>
  );
}

export default Header;
