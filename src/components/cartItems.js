import React, { useEffect } from "react";
import { useCartContext } from "../context/cartContext";

export default function CartItems() {
  const cartContext = useCartContext();
  const { item } = cartContext;
  useEffect(() => {
    console.log(item);
  }, [item]);

  // const mapCartItems = (item) => {
  //   return <li>{item}</li>;
  // };

  return (
    <div>
      <h1>cart items</h1>
      <p> Items: {item.join(", ")}</p>
      <p> Cantidad de items en carro: {item.length}</p>

      {/* NO ESTÁ FUNCIONANDO EL MAP, NO SE MUESTRAN LOS ITEMS EN PANTALLA, EL USEEFFECT MUESTRA EL ARRAY DE PRODUCTOS EN CARRITO OK */}
      <ul>
        {item.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
