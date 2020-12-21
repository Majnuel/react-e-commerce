import { useCartContext } from "../context/cartContext";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { ReactComponent as CartIcon } from "../assets/shopping-cart.svg";

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
          <div className="cartIcon">
            <CartIcon alt="shopping cart" />
            {amount === 0 ? null : (
              <div className="itemNumberOnCartIcon">{amount}</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
