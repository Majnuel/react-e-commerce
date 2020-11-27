import React, { useState } from "react";
import CartItems from "./cartItems";
import QuantityInput from "./quantityInput";

export default function Cart() {
  const [itemDesafio7, setItemDesafio7] = useState();
  const [quantity, setQuantity] = useState(0);
  const incremento = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };
  const decremento = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      console.log(quantity);
    }
  };
  const productoDesafio7 = "Lanzallamas";
  new Promise((resolve, reject) => {
    resolve(setTimeout(() => setItemDesafio7(productoDesafio7), 2000));
  });

  return (
    <div>
      <h1>cart</h1>
      {/* borrar prop itemToRender y quantityInput despues de aprobar desafio clase 7 */}
      <QuantityInput
        quantity={quantity}
        decremento={() => decremento()}
        incremento={() => incremento()}
      ></QuantityInput>
      <CartItems
        quantity={quantity}
        itemToRender={
          itemDesafio7 === undefined ? "L O A D I N G" : itemDesafio7
        }
      ></CartItems>
    </div>
  );
}
