import React from "react";
import ItemCard from "./itemCard";
import { products } from "../products/products";

export default function MainScreen() {
  return (
    <div>
      <h1>Your Products</h1>
      <div className="container d-flex flex-row justify-content-between flex-wrap productsContainer">
        {products.map((p) => (
          <ItemCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
