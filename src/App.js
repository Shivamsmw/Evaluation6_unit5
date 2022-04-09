import React from "react";
import "./App.css";
import RegisterForm from "./Components/Register";
import LoginForm from "./Components/LoginForm";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { HomePage } from "./Components/Homepage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
