import React, { useState } from "react";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const incrementButton = () => {
    let incrementCounter = count + 1;
    setCount(incrementCounter);
  };

  const decrementButton = () => {
    let decrementCounter = count - 1;
    setCount(decrementCounter);
  };

  const resetButton = () => {
    setCount(0);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSetValue = () => {
    setCount(Number(inputValue));
    setInputValue("");
  };

  return (
    <div className="container counter">
      <h1 className="header">Counter App</h1>

      <div className="main-section">
        <div className="flex">
          <button className="increment-btn" onClick={incrementButton}>
            +
          </button>

          <h2 className="count-value">{count}</h2>

          <button className="decrement-btn" onClick={decrementButton}>
            -
          </button>
        </div>
        <div className="input-value flex">
          <input placeholder="Enter value" onChange={handleInputChange} value={inputValue} />
          <button className="btn set-value" onClick={handleSetValue}>
            Set Value
          </button>
        </div>

        <button className="btn reset" onClick={resetButton}>
          Reset
        </button>
      </div>

     <button className="go-back">
     <Link to="/">Go Home...</Link>
     </button>

      <footer className="copyright">
        <p>Copyright &copy; Tamma-alt 2023</p>
      </footer>
    </div>
  );
}

export default Counter;
