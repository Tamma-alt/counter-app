import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import CustomErrorFallback from "./CustomErrorFallback";
import { Link } from "react-router-dom";

function TestError() {
  return (
    <div className="container error">
      <ErrorBoundary FallbackComponent={<NoPage />}>
        <ul>
          <li></li>
        </ul>
        <button className="go-back">
        <Lin to="/">Go Home...</Lin>
      </button>
      </ErrorBoundary>
      

      <footer className="copyright">
        <p>Copyright &copy; Tamma-alt 2023</p>
      </footer>
    </div>
  );
}

export default TestError;
