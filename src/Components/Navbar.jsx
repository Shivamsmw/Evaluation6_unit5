import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">HomePage</Link>
      <Link to="/Register">Rejister user</Link>
      <Link to="/Login">Login user</Link>
    </div>
  );
};
export { Navbar };
