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

  const changeQuantity = (itemId, newQuantity) => {
    const item = items.filter((prod) => prod.id === itemId)[0];
    if (item === undefined) return;
    if (newQuantity === 0) return removeItem(itemId);
    item.quantity = newQuantity;
    setUpdated(updated + 1);
  };

  const removeItem = (itemId) =>
    setItems(items.filter((prod) => prod.id !== itemId));

  const pushItem = (newItem, quantity = 1) => {
    let itemToAdd = items.filter((prod) => prod.id === newItem.id)[0];
    if (itemToAdd === undefined) {
      setItems([
        ...items,
        {
          ...newItem,
          quantity: quantity,
          price: newItem.price,
        },
      ]);
    } else {
      itemToAdd.quantity += quantity;
    }
    setUpdated(updated + 1);
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
      value={{
        items,
        amount,
        grandTotal,
        pushItem,
        clearCart,
        removeItem,
        changeQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
