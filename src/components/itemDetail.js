import React from "react";
import QuantityInput from "./quantityInput";
import { useParams, Link } from "react-router-dom";

export default function ItemDetail(props) {
  console.log(useParams());
  return (
    <div className="container">
      <h1>Item Detail</h1>
      <div className="container d-flex flex-row">
        <img src="https://via.placeholder.com/450" alt="" />
        <div className="ml-5">
          <h4>Product Name: {useParams().id}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            cumque dignissimos quod exercitationem, quibusdam obcaecati quaerat
            blanditiis labore accusantium iure maiores quidem, voluptatum
            perspiciatis quo. Impedit, commodi! Nemo nobis ea amet dolorum atque
            facilis fugit? Obcaecati asperiores saepe id natus exercitationem,
            magni libero assumenda vitae laborum quibusdam similique dignissimos
            culpa?
          </p>
          <button href="www.google.com" className="btn btn-primary">
            Add to Cart
          </button>
          <QuantityInput />
          <div>Price:</div>
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-primary">Back</button>
      </Link>
    </div>
  );
}
