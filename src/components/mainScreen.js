import React from "react";
import ItemCard from "./itemCard";
// import { products } from "../products/products";

export default function MainScreen() {
  // no logro leer los productos desde acá
  // const renderProducts = () => {
  //   console.log(products);
  // };
  return (
    <div>
      <h1>Your Products</h1>
      {/* {renderProducts()} */}
      <div className="container d-flex flex-row justify-content-between flex-wrap productsContainer">
        <ItemCard productName="Lanzallamas" id="1" price="30" />
        <ItemCard productName="Tamagotchi" id="2" price="45" />
        <ItemCard productName="Paracaidas" id="3" price="80" />
        <ItemCard productName="Spork" id="4" price="70" />
        <ItemCard productName="JetPack" id="5" price="120" />
        <ItemCard productName="Alfombra" id="6" price="3000" />
        <ItemCard productName="Cable HDMI" id="7" price="89" />
        <ItemCard productName="Semillas de Girasol" id="8" price="4" />
      </div>
    </div>
  );
}
