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
  Tbody,
} from "@chakra-ui/react";
import { AiFillBoxPlot } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, removeFromCart, totalPrice } = useContext(CartContext);

  const Header = ["S/N", "Name", "Image", "Price", "Modify"];

  return (
    <Stack overflowX={"hidden"}>
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
            <Tbody>
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
                      borderRadius={"xl"}
                    />
                  </Td>
                  <Td>${item.FoodPrice}</Td>
                  <Td>
                    <Button
                      bg={"red"}
                      _focus={{ outline: "none" }}
                      color={"white"}
                      onClick={removeFromCart}
                      _hover={{ bg: "red", color: "white" }}
                    >
                      Remove
                    </Button>
                  </Td>
                </Tr>
              ))}
              {!items.length < 1 && (
                <Tr>
                  <Td
                    colSpan={"5"}
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                  >
                    Total: ${totalPrice}
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
          {!items.length < 1 && (
            <Box p={8}>
              <Link to={"/checkout"}>
                <Button
                  bg={"whatsapp.200"}
                  color={"white"}
                  _hover={{
                    bg: "whatsapp.100",
                    color: "white",
                    outline: "none",
                  }}
                  _focus={{ outline: "none" }}
                  mt={8}
                  width={"100%"}
                >
                  Checkout
                </Button>
              </Link>
            </Box>
          )}
        </Card>
      </Flex>
    </Stack>
  );
};

export default CartPage;
