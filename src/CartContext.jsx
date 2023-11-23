import { Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Application state manager
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //  Calculator for multiple items
  useEffect(() => {
    const newTotal = items.reduce((acc, item) => acc + item.FoodPrice, 0);
    const trimmedPrice = Math.round(newTotal);
    setTotalPrice(trimmedPrice);
  }, [items]);

  // Adding item to cart onClick Function

  const addToCart = (FoodName, FoodPrice, FoodImage) => {
    setItems((prevState) => [...prevState, { FoodName, FoodPrice, FoodImage }]);
  };

  // Removing item from cart onClick function

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
