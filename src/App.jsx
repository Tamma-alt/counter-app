import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import  Home from "./pages/Home";
import  Counter  from "./pages/Counter";
import  TestError from"./pages/TestError";
import Nopage from"./pages/Nopage"

function App() {

  return (
    <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/test-error" element={<TestError/>}/>
      <Route path="*" element={<Nopage/>}/>
    </Routes>
    </div>
  )
}

export default App
