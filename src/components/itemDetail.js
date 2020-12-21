import React, { useContext, useEffect, useState } from "react";
import QuantityInput from "./quantityInput";
import { useParams, Link, Redirect } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { DB } from "../tools/firebaseFactory";

export default function ItemDetail() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
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
    <div className="container ">
      <div className="row border-right">
        <div className="col-md-6 col-lg-4">
          <img className="img-fluid" src={product.img} alt={product.name} />
        </div>
        <div className="col">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="addToCardAndQuantity">
            <div>${product.price}</div>
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
      <div className="d-flex flex-row justify-content-end">
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
  );
}
