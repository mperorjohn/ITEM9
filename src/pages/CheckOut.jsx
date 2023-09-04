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
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { useSubmit } from "react-router-dom";

const CheckOut = () => {
  const [defaultCart, setDefaultCart] = useState(1);

  const CartHandlerPlus = () => {
    setDefaultCart(defaultCart + 1);
  };

  const CartHandlerMinus = () => {
    setDefaultCart(defaultCart - 1);
  };

  const ExpressCheckout = [
    "src/assets/Mastercard-logo.svg.png",
    "src/assets/Verve_Image.png",
    "src/assets/Visa-investment-in-Africa.png",
  ];

  // const HandleSubmit = useSubmit(async (e) => {
  //   e.preventDefault();
  // });

  return (
    <Stack overflowX={"hidden"}>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Flex flex={1} bg={"none"} justify={"center"}>
          <Container>
            <Text textAlign={"center"} fontSize={"4xl"} color={"white"}>
              Complete Order Now
            </Text>
            <Card borderRadius={"md"}>
              <CardHeader>
                <Text
                  _hover={{ color: "orange.200", transition: "0.5s" }}
                  color={"whatsapp.200"}
                  fontWeight={"medium"}
                >
                  Information &gt; Payment &gt; Delivery
                </Text>

                <Text
                  fontStyle={"italic"}
                  textAlign={"center"}
                  mt={4}
                  fontWeight={"medium"}
                >
                  Express checkout
                </Text>
                <Flex mt={4} gap={6} justify={"center"} border={"2px"}>
                  {ExpressCheckout.map((image, index) => (
                    <Image
                      boxSize={"80px"}
                      objectFit={"contain"}
                      key={index}
                      src={image}
                    />
                  ))}
                </Flex>
                <Text textAlign={"center"} mt={4} fontWeight={"bold"}>
                  OR CONTINUE BELOW TO PAY WITH OTHER CARD
                </Text>
              </CardHeader>
              <CardBody>
                <Text fontSize={"xl"} fontWeight={"medium"}>
                  Contact Information
                  <Text ml={"70px"} fontSize={"small"} as={"span"}>
                    Already have an account?<Link to={"/login"}>Login</Link>
                  </Text>
                </Text>
                <FormControl>
                  <Input
                    variant={"filled"}
                    bg={"whatsapp.200"}
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                  />
                  <Checkbox colorScheme="whatsapp" mt={2} size={"sm"}>
                    Email me with the news and offer
                  </Checkbox>

                  <Text mt={6} fontSize={"xl"} fontWeight={"medium"}>
                    Shipping Address
                  </Text>

                  <Flex gap={"4"} flexDirection={"row"}>
                    <Input
                      type="text"
                      variant={"filled"}
                      placeholder="First name"
                      width={"50%"}
                    />
                    <Input
                      type="text"
                      variant={"filled"}
                      placeholder="Last name"
                      width={"50%"}
                    />
                  </Flex>
                  <Input
                    type="text"
                    variant={"filled"}
                    placeholder="Address"
                    mt={4}
                    isRequired
                  />
                  <Flex mt={4} gap={"4"} flexDirection={"row"}>
                    <Input
                      type="tel"
                      variant={"filled"}
                      placeholder="Phone number"
                      width={"50%"}
                    />
                    <Input
                      type="text"
                      variant={"filled"}
                      placeholder="City"
                      width={"50%"}
                    />
                  </Flex>
                  <Button
                    width={"100%"}
                    mt={10}
                    _focus={{ outline: "none", border: "none" }}
                    _hover={{ bg: "whatsapp" }}
                    bg={"whatsapp.200"}
                    type="submit"
                    color={"white"}
                  >
                    Proceed Payment
                  </Button>
                </FormControl>
              </CardBody>
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
