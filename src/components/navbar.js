import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar d-flex flex-row justify-content-around">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/categories">
          <li>Categories</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}
