import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Flex,
  Heading,
  Image,
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

  const ExpressCheckout = [
    "src/assets/Mastercard-logo.svg.png",
    "src/assets/Verve_Image.png",
    "src/assets/Visa-investment-in-Africa.png",
  ];

  return (
    <Stack>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Flex flex={1} bg={"none"} justify={"center"} borderRadius={"full"}>
          <Container>
            <Text textAlign={"center"} fontSize={"4xl"} color={"white"}>
              Complete Order Now
            </Text>
            <Card borderRadius={"none"}>
              <CardHeader>
                <Text
                  _hover={{ color: "orange.200", transition: "0.5s" }}
                  color={"whatsapp.200"}
                  fontWeight={"medium"}
                >
                  Information &gt; Payment &gt; Delivery
                </Text>

                <Flex gap={6} justify={"center"} border={"2px"}>
                  {ExpressCheckout.map((image, index) => (
                    <Image
                      boxSize={"80px"}
                      objectFit={"contain"}
                      key={index}
                      src={image}
                    />
                  ))}
                </Flex>
                <Text fontStyle={"italic"} textAlign={"center"}>
                  Express checkout
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
