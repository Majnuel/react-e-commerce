import React, { useState } from "react";
import { CartItem } from "./";
import { useCartContext } from "../../context/cartContext";
import { useUserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import { DB, TIMESTAMP } from "../../tools/firebaseFactory";
import Login from "../login/logIn";
import "./cart.scss";

export default function Cart() {
  const cartContext = useCartContext();
  const userContext = useUserContext();
  const [modalShown, setModalShown] = useState(false);
  const { items, grandTotal, clearCart } = cartContext;
  const { registeredUser, user } = userContext;
  console.log(registeredUser);
  console.log(items);
  console.log(grandTotal);

  const postNewOrder = () => {
    console.log(registeredUser);
    if (registeredUser) {
      const order = DB.collection("orders");
      order
        .add({
          buyer: { ...user },
          items: items,
          itemQuantity: items.length,
          total: grandTotal,
          timeStamp: TIMESTAMP.now(),
        })
        .then(() => clearCart())
        .catch((error) => console.log(error))
        .finally(console.log("finally"));
    } else {
      console.log("user not registered");
      setModalShown(true);
    }
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      <div>
        {items.length === 0 ? (
          <div className="d-flex flex-column justify-content-start align-items-center">
            <h3 className="noItemsInCart">No items in cart yet</h3>
            <Link to="/">
              <button type="button" className="btn btn-primary">
                I want to buy!
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart cart-grid">
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              {grandTotal === 0 ? null : `Total: ${grandTotal}`}
            </div>
            <button className="btn btn-primary btn-lg" onClick={postNewOrder}>
              Checkout
            </button>
          </>
        )}
      </div>
      {modalShown && !registeredUser ? <Login /> : null}
    </div>
  );
}
