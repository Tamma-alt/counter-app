import React from "react";
import { Link } from "react-router-dom";

function Nopage() {
  return (
    <div className="container no-page">
      <h1>404</h1>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <p>
        Sorry the page your're looking for doesn't exist. Or it was
        moved,removed or renamed
      </p>
      <button className="go-back">
        <Link to="/">Go Home...</Link>
      </button>
    </div>
  );
}

export default Nopage;
