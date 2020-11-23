import React, { useState } from "react";

export default function QuantityInput() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="d-flex flex-row">
      <button
        onClick={() =>
          quantity > 0 ? setQuantity(quantity - 1) : quantity == quantity
        }
      >
        -
      </button>
      <p>{quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}
