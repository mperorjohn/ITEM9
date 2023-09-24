import React, { useEffect, useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotal = items.reduce((acc, items) => acc + items.FoodPrice, 0);
    setTotalPrice(newTotal);
  }),
    [items];

  const addToCart = (FoodName, FoodPrice, FoodImage) => {
    setItems((prvState) => [...prvState, { FoodName, FoodPrice, FoodImage }]);
    console.log(FoodName, FoodPrice, FoodImage);
  };
  const removeFromCart = (index) => {
    setItems((items) => {
      // Create a copy of the items array without the item at the specified index
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <React.Fragment>
      <CartContext.Provider
        value={{ items, addToCart, removeFromCart, totalPrice }}
      >
        {children}
      </CartContext.Provider>
    </React.Fragment>
  );
};

export default CartContext;
