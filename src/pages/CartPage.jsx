import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import { Container, ListItem, UnorderedList } from "@chakra-ui/react";

const CartPage = () => {
  const { items } = useContext(CartContext);

  return (
    <Container>
      {items.map((item, index) => (
        <UnorderedList key={index}>
          <ListItem>{item.FoodName}</ListItem>
          <ListItem>{item.FoodPrice}</ListItem>
        </UnorderedList>
      ))}
    </Container>
  );
};

export default CartPage;
