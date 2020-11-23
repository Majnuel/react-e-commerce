import React, { useContext } from "react";
import QuantityInput from "./quantityInput";
import { Link } from "react-router-dom";
import usePruebaContext from "../context/globalContext";

export default function ItemCard(props) {
  const pruebaContext = usePruebaContext();
  const { prueba } = pruebaContext;
  console.log(prueba);
  return (
    <div className="card productCard">
      <Link to={"/itemDetail/" + props.productName}>
        <img
          // className="card-img-top"
          src="https://via.placeholder.com/200"
          alt="item"
        ></img>
      </Link>
      <div className="card-body">
        <Link to={"/itemDetail/" + props.productName}>
          <h5 className="card-title">{props.productName}</h5>
        </Link>

        <p className="card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel animi
          autem deserunt, dolorem earum quos.
        </p>
        <button className="btn btn-primary">Add to Cart</button>
        <QuantityInput />
        <div>Price: {props.price}</div>
      </div>
    </div>
  );
}