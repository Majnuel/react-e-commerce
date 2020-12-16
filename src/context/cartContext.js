import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [updated, setUpdated] = useState(0);

  const clearCart = () => {
    setItems([]);
  };

  const pushItem = (newItem) => {
    let itemToAdd = items.filter((prod) => prod.id === newItem.id)[0];
    console.log(itemToAdd);
    if (itemToAdd === undefined) {
      setItems([
        ...items,
        {
          ...newItem,
          quantity: 1,
          price: newItem.price,
        },
      ]);
    } else {
      itemToAdd.quantity += 1;
    }
    setUpdated(updated + 1);
    console.log(amount);
  };
  useEffect(() => {
    setAmount(items.reduce((prev, item) => item.quantity + prev, 0));
    setGrandTotal(
      items.reduce(
        (prevBalance, item) => item.price * item.quantity + prevBalance,
        0
      )
    );
  }, [updated, items]);

  return (
    <CartContext.Provider
      value={{ items, amount, grandTotal, pushItem, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
