import React, { useEffect } from "react";
import { products } from "../products/products";

export default function CartItem(props) {
  console.log(props);

  return (
    <div className="d-flex flex-row justify-content-between">
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>cantidad: {props.quantity}</div>
    </div>
  );
}
