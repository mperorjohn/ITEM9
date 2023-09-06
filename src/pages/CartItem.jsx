import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  FormControl,
  Image,
  Input,
  Stack,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
// import { useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";

const CartItem = () => {
  const [defaultCart, setDefaultCart] = useState(1);
  const [defaultPrice, setDefaultPrice] = useState(12.99);

  const [totalPrice, setTotalPrice] = React.useState();

  // Functions to handle buttons
  const CartHandlerPlus = () => {
    setDefaultCart(defaultCart + 1) + 1;
  };

  const CartHandlerMinus = () => {
    setDefaultCart(defaultCart - 1);
  };

 

//   useEffect(() => {
//     const calculatedPrice = Math.ceil(defaultCart * 12.99);
//     setDefaultPrice(calculatedPrice);

//     //
//     // const calculatedDeliveryPrice = Math.ceil(defaultPrice / deliveryPrice);
//     // setDeliveryPrice(calculatedDeliveryPrice);

//     //
//     // const calculatedTotalPrice = Math.ceil(deliveryPrice + defaultPrice);
//     // setTotalPrice(calculatedTotalPrice);
//     // setFullname(firstname + lastname);
//   }, [defaultCart, defaultPrice,]);
  return (
    <Stack overflowX={'hidden'}>
    <Flex flex={1} bg={"none"}>
      <Stack ml={8} >
        <Text textAlign={"center"} fontSize={"4xl"} color={"white"}>
          Cart Items
        </Text>
        <Card height={"100vh"} scrollBehavior={"none"}>
          <CardHeader>
            <Text
              _hover={{ color: "orange.200", transition: "0.5s" }}
              color={"whatsapp.200"}
              fontWeight={"medium"}
            >
              Modify Cart
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"4xl"}
              bg={"whatsapp.200"}
              color={"white"}
            >
              Item
            </Text>
            <Text mb={6} fontSize={"2xl"} color={"whatsapp.200"}>
              Item
              <Text
                as={"span"}
                color={"orange.200"}
                ml={"340px"}
                fontWeight={"bold"}
              >
                Price
              </Text>
            </Text>
            <Text mb={6} fontSize={"2xl"} color={"whatsapp.200"}>
              <Text as={"span"}>{defaultCart} </Text>
              Spaghetti Carbonara
              <Text
                as={"span"}
                color={"orange.200"}
                ml={"170px"}
                fontWeight={"bold"}
              >
                ${defaultPrice}
              </Text>
            </Text>
            <hr color="green" />
            <Flex gap={10}>
              <Button
                mt={6}
                bg={"whatsapp.200"}
                color={"white"}
                _focus={{ outline: "none", border: "none" }}
                onClick={CartHandlerPlus}
              >
                Add
              </Button>{" "}
              <Button
                mt={6}
                onClick={CartHandlerMinus}
                isDisabled={defaultCart === 1}
                _focus={{ outline: "none", border: "none" }}
              >
                Remove
              </Button>
            </Flex>
            <Text textAlign={"center"} fontSize={"3xl"}>
              Delivery Details
            </Text>
            <Text>
              Name:
              <Text fontWeight={"bold"} color={"whatsapp.400"} as={"span"}>
                {/* {fullname} */}
              </Text>
              <br />
              Address:
              <Text fontWeight={"bold"} color={"whatsapp.400"} as={"span"}>
                {/* {address} */}
              </Text>
              <br />
              Email:
              <Text fontWeight={"bold"} color={"whatsapp.400"} as={"span"}>
                {/* {email} */}
              </Text>
              <br />
              Phone:
              <Text fontWeight={"bold"} color={"whatsapp.400"} as={"span"}>
                {/* {phone} */}
              </Text>
              <br />
              <hr style={{ marginTop: "20px", color: "green" }} />
              <Text mt={4}>
                <Text>Item: ${defaultPrice}</Text>
                <Text>Delivery:</Text>
              </Text>
              <Text
                mt={4}
                color={"whatsapp.200"}
                fontSize={"2xl"}
                textAlign={"end"}
                fontWeight={"bold"}
              >
                Total: {totalPrice}
              </Text>
            </Text>
          </CardHeader>
        </Card>
      </Stack>
    </Flex>
    </Stack>
  );
};

export default CartItem;
