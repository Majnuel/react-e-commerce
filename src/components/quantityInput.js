import React, { useState } from "react";

export default function QuantityInput({
  max = 10,
  min = 1,
  updateQuantity = () => {},
  ...props
}) {
  const [quantity, setQuantity] = useState(1);

  const handleClick = (newValue) => {
    if (newValue < min || newValue > max) return;
    setQuantity(newValue);
    updateQuantity(newValue);
  };

  return (
    <div className="d-flex flex-row justify-content-between">
      <button
        className="btn btn-secondary"
        onClick={() => handleClick(quantity - 1)}
      >
        -
      </button>
      <div>{quantity}</div>
      <button
        className="btn btn-secondary"
        onClick={() => handleClick(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
