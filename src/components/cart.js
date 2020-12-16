import React, { useState } from "react";
import CartItem from "./cartItem";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { DB, TIMESTAMP } from "../tools/firebaseFactory";
import Login from "./login/logIn";
// import Login from "./login/logIn";

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
              {grandTotal === 0 ? null : `Total: ${grandTotal}`}
            </div>
          )}
        </div>
      </div>
      {modalShown && !registeredUser ? <Login /> : null}
      <button onClick={postNewOrder}>buy</button>
    </div>
  );
}
