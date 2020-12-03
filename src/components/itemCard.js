import React, { useContext } from "react";
import QuantityInput from "./quantityInput";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

export default function ItemCard(props) {
  const cartContext = useContext(CartContext);
  const { pushItem } = cartContext;
  const product = {
    id: props.id,
    name: props.name,
    price: props.price,
  };

  return (
    <div className="card productCard">
      <Link to={"/itemDetail/" + props.id}>
        <img src="https://via.placeholder.com/200" alt="item"></img>
      </Link>
      <div className="card-body">
        <Link to={"/itemDetail/" + props.id}>
          <h5 className="card-title">{props.name}</h5>
        </Link>

        <p className="card-text">{props.description}</p>
        <button onClick={() => pushItem(product)} className="btn btn-primary">
          Add to Cart
        </button>
        <QuantityInput />
        <div>Price: {props.price}</div>
      </div>
    </div>
  );
}
