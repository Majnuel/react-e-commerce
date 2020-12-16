import React, { useContext, useEffect, useState } from "react";
import QuantityInput from "./quantityInput";
import { useParams, Link, Redirect } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { DB } from "../tools/firebaseFactory";

export default function ItemDetail() {
  const [product, setProduct] = useState({});
  const cartContext = useContext(CartContext);
  const { pushItem } = cartContext;
  const id = useParams().id;
  useEffect(() => {
    DB.collection("e-commerce")
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("sin resultados");
          return <Redirect to="/" />;
        }
        const productInDB = {
          id: doc.id,
          ...doc.data(),
        };
        setProduct(productInDB);
      })
      .catch((error) => <Redirect to="/" />);
  }, [id]);
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
