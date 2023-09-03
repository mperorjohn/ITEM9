import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";

const CheckOut = () => {
  const { cart, setCart } = useState();

  const CartHandlerPlus = () => {
    setCart() + 1;
  };

  const CartHandlerMinus = () => {
    setCart(cart) - 1;
  };

  return (
    <Stack>
      <Flex flexDirection={"row"}>
        <Flex flex={1} bg={"orange.200"}>
          <Heading>Proceed Payment</Heading>

          <Button bg={"orange.200"} onClick={CartHandlerPlus}></Button>
          <Button bg={"orange.200"} onClick={CartHandlerMinus}></Button>
        </Flex>
        <Flex flex={1} bg={"whatsapp.200"}>
          <Heading>Checkout</Heading>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default CheckOut;
