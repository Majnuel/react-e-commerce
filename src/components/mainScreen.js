import React from "react";
import ItemCard from "./itemCard";
import { products } from "../products/products";

export default function MainScreen() {
  // no logro leer los productos desde acá
  // const renderProducts = () => {
  //   console.log(products);
  // };
  return (
    <div>
      <h1>Your Products</h1>
      <div className="container d-flex flex-row justify-content-between flex-wrap productsContainer">
        {products.map((p, index) => (
          <ItemCard
            key={index}
            productName={p.name}
            id={p.id}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}
