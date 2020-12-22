import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

export default function CartItem(props) {
  const cartContext = useContext(CartContext);
  const { removeItem, changeQuantity } = cartContext;
  const [innerQuantity, setInnerQuantity] = useState(props.quantity);

  const handleClick = (newValue) => {
    changeQuantity(props.id, newValue);
    setInnerQuantity(newValue);
  };

  return (
    <div className="cartItem">
      <div>{props.name}</div>
      <div>${props.price}</div>
      <div>quantity: {innerQuantity}</div>
      <div className="btn-toolbar">
        <div className="btn-group mr-2">
          <button
            className="btn btn-outline-dark"
            onClick={() => handleClick(innerQuantity - 1)}
          >
            -
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => handleClick(innerQuantity + 1)}
          >
            +
          </button>
        </div>
        <button className="btn btn-danger" onClick={() => removeItem(props.id)}>
          remove
        </button>
      </div>
    </div>
  );
}
