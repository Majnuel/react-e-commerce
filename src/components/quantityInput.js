import React, { useState, useContext } from "react";

//como no es el default export necesita ser destructured: usar {}
import { CartContext } from "../context/cartContext";

export default function QuantityInput(props) {
  const [quantity, setQuantity] = useState(0);
  const cartContext = useContext(CartContext);

  // CODIGO ORIGINAL
  // return (
  //   <div className="d-flex flex-row">
  //     <button
  //       onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : quantity)}
  //     >
  //       -
  //     </button>
  //     <p>{quantity}</p>
  //     <button onClick={() => setQuantity(quantity + 1)}>+</button>
  //   </div>
  // );

  // PARA DESAFIO 7, BORRAR DESPUESD DE APROBAR
  return (
    <div className="d-flex flex-row">
      <button onClick={props.decremento}>-</button>
      <p>{props.quantity}</p>
      <button onClick={props.incremento}>+</button>
    </div>
  );
}
