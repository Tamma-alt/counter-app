import React from "react";
import { Link } from "react-router-dom";

function TestError() {
  return (
    <div className="container error">
      <h1 className="error-header">Opps someething went wrong</h1>
      <p>something went wrong within the components</p>
      <button className="go-back">
        <Link to="/">Go Home...</Link>
      </button>

      <footer className="copyright">
        <p>Copyright &copy; Tamma-alt 2023</p>
      </footer>
    </div>
  );
}

export default TestError;
