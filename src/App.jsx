import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Counter } from "./pages/Counter";
import { TestError} from"./pages/TestError";

function App() {

  return (
    <div className="container">
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/home" element={<Counter/>}/>
      <Route path="/home" element={<TestError/>}/>
      <Route path="*" element={<TestError/>}/>
    </Routes>
    </div>
  )
}

export default App
