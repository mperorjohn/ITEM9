import {
  Stack,
  Text,
  Container,
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Checkbox,
  InputLeftAddon,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const PhoneHandler = (event) => {
    setPhoneNumber(event.target.value);
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Stack justify={"center"} overflowX={"hidden"}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 4 }}>
        <Text
          fontSize={{ base: "4xl", md: "7xl" }}
          fontWeight={"bold"}
          mt={12}
          color={"white"}
          textAlign={"center"}
        >
          Begin
          <Text as={"span"} ml={"2"} color={"orange.200"}>
            Ordering
          </Text>
        </Text>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 2 }}
        transition={{ type: "tween", delay: 0.2 }}
      >
        <Container mt={"2"}>
          <Card bg={"none"} mt={"-10"} shadow={"none"}>
            <CardHeader>
              <Text
                color={"white"}
                textAlign={"center"}
                fontSize={{ base: "2xl", md: "4xl" }}
              >
                Create Account
              </Text>
            </CardHeader>
            <CardBody mt={"-10"}>
              <FormControl p={6}>
                <FormLabel color={"white"} fontSize={"xl"} htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  //   variant={"filled"}
                  outline={"none"}
                  _focus={{ color: "none" }}
                  bg={"whatsapp.200"}
                  color={"white"}
                  type="email"
                  placeholder="Enter your email"
                  size={"md"}
                  _hover={{ bg: "whatsapp.300", outline: "none" }}
                  onChange={EmailHandler}
                  // fontFamily={"'Montserrat', sans-serif"}
                  // fontWeight={"600"}
                />
                <FormLabel color={"white"} fontSize={"xl"} htmlFor="email">
                  Phone
                </FormLabel>
                <InputGroup
                  bg="whatsapp.200"
                  color={"whatsapp.200"}
                  fontWeight={"bold"}
                >
                  <InputLeftAddon colorScheme="whatsapp.200" children="+234" />
                  <Input
                    color="white"
                    type="tel"
                    placeholder="phone number"
                    onChange={PhoneHandler}
                    _hover={{ bg: "whatsapp.300", outline: "none" }}
                    // fontFamily={"'Montserrat', sans-serif"}
                    // fontWeight={"600"}
                  />
                </InputGroup>
                <FormLabel
                  color={"white"}
                  fontSize={"xl"}
                  htmlFor="email"
                  mt={2}
                >
                  Create Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    bg={"white.200"}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    onChange={PasswordHandler}
                    variant={"filled"}
                    colorScheme="whatsapp.200"
                  />
                  <InputRightElement width="4.5rem" color={"white"}>
                    <Button
                      bg={"whatsapp.200"}
                      _hover={{ bg: "whatsapp.300", outline: "none" }}
                      color={"white"}
                      h="2rem"
                      w={"4rem"}
                      size="sm"
                      onClick={handleClick}
                    >
                      {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Flex mt={"4"}>
                  <Checkbox colorScheme={"whatsapp.200"} color={"white"}>
                    Remember Me
                  </Checkbox>
                </Flex>
                <Button
                  mt={4}
                  bg={"whatsapp.200"}
                  color={"white"}
                  width={"100%"}
                  _hover={{ bg: "whatsapp.300", outline: "none" }}
                  isDisabled={
                    email === "" || password === "" || phoneNumber === ""
                  }
                >
                  Sign Up
                </Button>
                <Text
                  color={"white"}
                  textAlign={"center"}
                  _hover={{ color: "whatsapp.200" }}
                  mt={2}
                >
                  <Link to={"/login"}>Sign In</Link>
                </Text>
              </FormControl>
            </CardBody>
          </Card>
        </Container>
      </motion.div>
    </Stack>
  );
};

export default RegisterPage;
