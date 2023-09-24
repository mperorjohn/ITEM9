import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import {
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Box,
  Container,
  Table,
  Tr,
  Th,
  Td,
  Flex,
} from "@chakra-ui/react";

const CartPage = () => {
  const { items, removeFromCart } = useContext(CartContext);

  const Header = ["Serial", "Name", "Image", "Price", "Remove"];

  return (
    <Stack overflowX={'hidden'}>
      <Heading
        textAlign={"center"}
        size={"xl"}
        color={items.length < 1 ? "white" : "orange.200"}
      >
        {items < 1 ? "Your Cart is empty" : "Your cart "}
      </Heading>
      <Flex justifyContent={"center"} justifyItems={"center"}>
        <Card justify={"center"}>
          <Table>
            {!items.length < 1 && (
              <Tr>
                {Header.map((data, index) => (
                  <Th
                    key={index}
                    bg={"whatsapp.200"}
                    color={"white"}
                    borderRadius={""}
                    fontSize={"sm"}
                  >
                    {data}
                  </Th>
                ))}
              </Tr>
            )}

            {items.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item.FoodName}</Td>
                <Td>
                  <Image
                    objectFit={"cover"}
                    boxSize={"60px"}
                    src={item.FoodImage}
                  />
                </Td>
                <Td>${item.FoodPrice}</Td>
                <Td>
                  <Button onClick={removeFromCart}>Remove</Button>
                </Td>
              </Tr>
            ))}
          </Table>
        </Card>
      </Flex>
    </Stack>
  );
};

export default CartPage;
