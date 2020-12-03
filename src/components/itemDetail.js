import React, { useContext } from "react";
import QuantityInput from "./quantityInput";
import { useParams, Link, Redirect } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { products as productList } from "../products/products";

export default function ItemDetail() {
  const cartContext = useContext(CartContext);
  const { pushItem } = cartContext;
  const id = useParams().id;
  const product = productList.filter((prod) => prod.id === id)[0];
  if (!product) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <h1>{product.name}</h1>
      <div className="container d-flex flex-row">
        <img src="https://via.placeholder.com/450" alt={product.name} />
        <div className="ml-5">
          <h4>Product Name: {product.name}</h4>
          <p>{product.description}</p>
          <button onClick={() => pushItem(product)} className="btn btn-primary">
            Add to Cart
          </button>
          <QuantityInput />
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
