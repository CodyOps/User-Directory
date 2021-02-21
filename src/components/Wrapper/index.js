//Import in react and wrapper.css
import React from "react";
import "./Wrapper.css";

//Destructure children from props object
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
export default Wrapper;
