import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
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
        <Flex flex={1} bg={"none"} justify={"center"}>
          <Container>
            <Text
              size={""}
              textAlign={"center"}
              fontSize={"4xl"}
              color={"white"}
            >
              Complete Order Now
            </Text>
            <Card borderRadius={"none"}>
              <CardHeader>
                <Text _hover={{color:'orange.200', transition:'0.5s'}} color={"whatsapp.200"} fontWeight={"medium"}>
                  Information &gt; Payment &gt; Shipping
                </Text>
              </CardHeader>
            </Card>
          </Container>
        </Flex>
        <Flex flex={1} bg={"whatsapp.200"} justify={"center"}>
          <Text>Proceed Payment</Text>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default CheckOut;
