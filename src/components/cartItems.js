import React, { useEffect } from "react";
import { useCartContext } from "../context/cartContext";
import { products } from "../products/products";

export default function CartItems() {
  const cartContext = useCartContext();
  const { item } = cartContext;
  useEffect(() => {
    console.log("useEffect: " + item);
  }, [item]);

  let product;
  let properties;
  const renderCartItems = (item, products) => {
    //LOOP THROUGH THE ARRAY OF PRODUCTS IN CART
    item.forEach((element) => {
      // LOOP THROUGH THE LIST OF AVAILABLE PRODUCTS
      for (product of products) {
        // LOOP THROUGH THE PROPERTIES OF THESE PRODUCTS
        for (properties in product) {
          if (element === product[properties]) {
            console.log(product[properties]);
            console.log(element);
            console.log(typeof element);
            console.log(typeof product[properties]);
            return <p>product[properties]</p>;
          }
        }
      }
    });
  };

  return (
    <div className="container">
      <h1>cart items</h1>
      <ul>
        {item.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
      <div>{renderCartItems(item, products)}</div>
    </div>
  );
}
