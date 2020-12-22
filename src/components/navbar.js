import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";

export default function Navbar() {
  const userContext = useUserContext();
  const { user, registeredUser, logout } = userContext;
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          {!registeredUser ? <Link to="/login">Register</Link> : user.name}
        </li>
        {registeredUser ? (
          <li className="nav-item">
            {" "}
            <span className="Logout" onClick={logout}>
              logout
            </span>{" "}
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
