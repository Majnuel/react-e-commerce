import React from "react";
import CartItem from "./cartItem";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartContext = useCartContext();
  const { items, grandTotal } = cartContext;
  console.log(items);
  console.log(grandTotal);

  return (
    <div>
      <h1>cart</h1>
      <div className="container">
        <h1>cart items</h1>
        <div>
          {items.length === 0 ? (
            <div className="container">
              <h3>No items in cart yet</h3>
              <Link to="/">
                <h5>I want to buy some sh!</h5>
              </Link>
            </div>
          ) : (
            <div>
              {" "}
              {items.map((item, index) => (
                <CartItem key={index} {...item} />
              ))}{" "}
              {grandTotal === 0 ? "" : `Total: ${grandTotal}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
