import React from "react";
import CartItem from "./cartItem";
import { useCartContext } from "../context/cartContext";

export default function Cart() {
  const cartContext = useCartContext();
  const { items } = cartContext;
  console.log(items);
  const quantity = (itemsInCart) => {
    let quantity = 0;
    let products;
    for (products of itemsInCart) {
      let properties;
      for (properties in products) {
        if (properties === "id") {
          quantity += 1;
        }
        console.log(quantity);
      }
    }
  };
  return (
    <div>
      <h1>cart</h1>
      <div className="container">
        <h1>cart items</h1>
        <div>
          {quantity(items)}
          {items.map((item, index) => (
            <CartItem key={index} quantity={() => quantity} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
