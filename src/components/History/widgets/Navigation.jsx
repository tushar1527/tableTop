import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="F">
      <div className="E">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/mural">Mural</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
