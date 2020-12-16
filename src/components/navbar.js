import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";

export default function Navbar() {
  const userContext = useUserContext();
  const { user, registeredUser, logout } = userContext;
  console.log(user);
  return (
    <nav className="navbar d-flex flex-row justify-content-around">
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/contact">Contact Us</Link>
      {!registeredUser ? <Link to="/login">Login</Link> : user.name}
      {registeredUser ? <a onClick={logout}>logout</a> : null}
    </nav>
  );
}
