import React, { useContext, useState } from "react";
import QuantityInput from "../quantityInput";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import "./itemCard.css";

export default function ItemCard(props) {
  const [quantity, setQuantity] = useState(1);
  const cartContext = useContext(CartContext);
  const { pushItem } = cartContext;
  const product = {
    id: props.id,
    name: props.name,
    price: props.price,
  };

  return (
    <div className="card productCard">
      <Link className="card-img-top" to={"/itemDetail/" + props.id}>
        <img className="img-fluid" src={`${props.img}`} alt="item"></img>
      </Link>
      <div className="card-body">
        <Link to={"/itemDetail/" + props.id}>
          <h5 className="card-title">{props.name}</h5>
        </Link>

        <p className="card-text">{props.description}</p>
        <div className="addToCardAndQuantity">
          <div>Price: {props.price}</div>
          <div>
            <QuantityInput product={product} updateQuantity={setQuantity} />
            <button
              onClick={() => pushItem(product, quantity)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
