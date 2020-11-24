import React from "react";
import { useCartContext } from "../context/cartContext";

export default function CartItems() {
  const cartContext = useCartContext;
  const { item } = cartContext;

  return (
    <div>
      <h1>cart items</h1>
      <button onClick={() => console.log(item)}>context console.log</button>
      <p>{item}</p>
    </div>
  );
}
