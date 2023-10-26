import React from "react";
import { Link } from "react-router-dom";

function CustomErrorFallback() {
    return (
        <div className="container">
          <h1>Opps, something went wrong</h1>
          <p>Please either refresh the page or go return to the homepage</p>
          <button className="go-back">
        <Link to="/">Go Home...</Link>
      </button>
        </div>
    )
}

export default CustomErrorFallback;