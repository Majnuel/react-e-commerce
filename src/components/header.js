import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

import { useCartContext } from "../context/cartContext";

function Header() {
  const cartContext = useCartContext();
  const { amount } = cartContext;

  return (
    <div className="header-wraper">
      <div className="header container d-flex flex-row justify-content-around align-items-center">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
        <Navbar />
        <Link to="/cart">
          <div className="itemNumberOnCartIcon">{amount}</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
