import React, { useState, useContext } from "react";

//como no es el default export necesita ser destructured: usar {}
import { CartContext } from "../context/cartContext";

export default function QuantityInput() {
  const [quantity, setQuantity] = useState(0);
  const cartContext = useContext(CartContext);

  // const { item } = cartContext;
  // console.log(item);
  return (
    <div className="d-flex flex-row">
      <button
        onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : quantity)}
      >
        -
      </button>
      <p>{quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}
