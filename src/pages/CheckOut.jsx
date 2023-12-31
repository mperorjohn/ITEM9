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
import CartContext from "../CartContext";
import { useContext } from "react";

const CheckOut = () => {
  const { items, totalPrice } = useContext(CartContext);

  const [defaultPrice, setDefaultPrice] = useState(12.99);

  // State definitoin form
  const [email, setEmail] = React.useState("");
  const [firstname, setFirstname] = React.useState();
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState();
  const [address, setAddress] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState();
  const [valideYear, setValideYear] = React.useState();
  const [cvv, setCvv] = React.useState();


 
  // Getting forms value

  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const FirstnameHandler = (e) => {
    setFirstname(e.target.value);
  };
  const LastnameHandler = (e) => {
    setLastname(e.target.value);
  };
  const PhoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const AddressHandler = (e) => {
    setAddress(e.target.value);
  };

  const CardNumberhandler = (e) => {
    setCardNumber(e.target.value);
  };

  const ValideYearHandler = (e) => {
    setValideYear(e.target.value);
  };
  const CVVHandler = (e) => {
    setCvv(e.target.value);
  };

  const ExpressCheckout = [
    "src/assets/Mastercard-logo.svg.png",
    "src/assets/Verve_Image.png",
    "src/assets/Visa-investment-in-Africa.png",
  ];

  return (
    <Stack overflowX={"hidden"}>
      <motion.div
        initial={{ opacity: 0, y: "40vh" }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Flex flex={1} bg={"none"} justify={"center"}>
            <Stack ml={8} width={"100%"}>
              <Text textAlign={"center"} fontSize={"4xl"} color={"white"}>
                Cart Items
              </Text>
              <Card height={"100vh"} scrollBehavior={"none"}>
                <CardHeader>
                  <Text
                    textAlign={"center"}
                    fontSize={"4xl"}
                    bg={"whatsapp.200"}
                    color={"white"}
                  >
                    Total Price
                  </Text>
                  {!items.length < 1 && (
                    <Text mb={6} fontSize={"2xl"} color={"whatsapp.200"}>
                      ${totalPrice}
                    </Text>
                  )}

                  <hr color="green" />
                  <Flex gap={10}>
                    <Link to={"/cart"}>
                      <Button
                        mt={6}
                        bg={"whatsapp.200"}
                        color={"white"}
                        _focus={{ outline: "none", border: "none" }}
                      >
                        Modify cart
                      </Button>
                    </Link>
                  </Flex>
                  <Text textAlign={"center"} fontSize={"3xl"}>
                    Delivery Details
                  </Text>
                  <Text>
                    Name:
                    <Text
                      fontWeight={"bold"}
                      color={"whatsapp.400"}
                      as={"span"}
                    >
                      {fullname}
                    </Text>
                    <br />
                    Address:
                    <Text
                      fontWeight={"bold"}
                      color={"whatsapp.400"}
                      as={"span"}
                    >
                      {address}
                    </Text>
                    <br />
                    Email:
                    <Text
                      fontWeight={"bold"}
                      color={"whatsapp.400"}
                      as={"span"}
                    >
                      {email}
                    </Text>
                    <br />
                    Phone:
                    <Text
                      fontWeight={"bold"}
                      color={"whatsapp.400"}
                      as={"span"}
                    >
                      {phone}
                    </Text>
                    <br />
                    <hr style={{ marginTop: "20px", color: "green" }} />
                    <Text mt={4}>
                      <Text>Item: ${defaultPrice}</Text>
                      <Text>Delivery: {}</Text>
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
                      onChange={EmailHandler}
                    />
                    <Checkbox
                      defaultChecked
                      colorScheme="whatsapp"
                      mt={2}
                      size={"sm"}
                    >
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
                        onChange={FirstnameHandler}
                      />
                      <Input
                        type="text"
                        variant={"filled"}
                        placeholder="Last name"
                        width={"50%"}
                        onChange={LastnameHandler}
                      />
                    </Flex>
                    <Input
                      type="text"
                      variant={"filled"}
                      placeholder="Address"
                      mt={4}
                      isRequired
                      onChange={AddressHandler}
                    />
                    <Flex mt={4} gap={"4"} flexDirection={"row"}>
                      <Input
                        type="tel"
                        variant={"filled"}
                        placeholder="Phone number"
                        width={"50%"}
                        onChange={PhoneHandler}
                      />
                      <Input
                        type="text"
                        variant={"filled"}
                        placeholder="City"
                        width={"50%"}
                      />
                    </Flex>
                    <Input
                      mt={4}
                      type="number"
                      variant={"filled"}
                      placeholder="Card Number"
                      onChange={CardNumberhandler}
                    />
                    <Flex mt={4} gap={"4"} flexDirection={"row"}>
                      <Input
                        type="date"
                        variant={"filled"}
                        placeholder={"Valid"}
                        width={"50%"}
                        onChange={ValideYearHandler}
                      />
                      <Input
                        type="text"
                        variant={"filled"}
                        placeholder="CVV"
                        width={"50%"}
                        onChange={CVVHandler}
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
                      isDisabled={
                        !/^\d+$/.test(cardNumber) ||
                        !/^\d+$/.test(cvv) ||
                        !/^\d+$/.test(valideYear)
                      }
                    >
                      Proceed Payment
                    </Button>
                  </FormControl>
                </CardBody>
              </Card>
            </Container>
          </Flex>
        </Flex>
      </motion.div>
    </Stack>
  );
};

export default CheckOut;
