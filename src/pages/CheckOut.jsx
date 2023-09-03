import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";

const CheckOut = () => {
  const [defaultCart, setDefaultCart] = useState(1);

  const CartHandlerPlus = () => {
    setDefaultCart(defaultCart + 1) + 1;
  };

  const CartHandlerMinus = () => {
    setDefaultCart(defaultCart - 1);
  };

  return (
    <Stack>
      <Flex flexDirection={"row"}>
        <Flex flex={1} bg={"orange.200"}>
          <Heading>Proceed Payment</Heading>

          <p>Display cart{defaultCart}</p>
          <Box>
            <Button bg={"orange.200"} onClick={CartHandlerPlus}>
              Add
            </Button>
            <Button
              bg={"orange.200"}
              onClick={CartHandlerMinus}
              isDisabled={defaultCart < -1}
            >
              Remove
            </Button>
          </Box>
        </Flex>
        <Flex flex={1} bg={"whatsapp.200"}>
          <Heading>Checkout</Heading>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default CheckOut;
