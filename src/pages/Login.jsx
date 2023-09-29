import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Flex,
  Checkbox,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import { useState } from "react";
// import { useDisclosure } from "@chakra-ui/react";

const Login = () => {
  // state and function to disable submit button
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  // state and function to mask password
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  
  return (
    <Stack justify={"center"} overflowX={"hidden"}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 4 }}>
        <Text
          fontSize={"7xl"}
          fontWeight={"bold"}
          mt={4}
          color={"white"}
          textAlign={"center"}
        >
          Order
          <Text as={"span"} ml={2} color={"orange.200"}>
            Now
          </Text>
        </Text>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 2 }}
        transition={{ type: "tween", delay: 0.2 }}
      >
        <Container mt={"2"}>
          <Card bg={"none"} shadow={"none"}>
            <CardHeader>
              <Text color={"white"} textAlign={"center"} fontSize={"4xl"}>
                Sign In ITEM9
              </Text>
            </CardHeader>
            <CardBody mt={"-8"}>
              <FormControl p={6}>
                <FormLabel color={"white"} fontSize={"xl"} htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  //   variant={"filled"}
                  outline={"none"}
                  // _focus={{ color: "none" }}
                  bg={"whatsapp.200"}
                  color={"white"}
                  type="email"
                  size={"md"}
                  _hover={{ bg: "whatsapp.300", outline: "none" }}
                  onChange={EmailHandler}
                />
                <FormLabel
                  color={"white"}
                  fontSize={"xl"}
                  htmlFor="email"
                  mt={2}
                >
                  Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
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
                  isDisabled={email === "" || password === ""}
                >
                  Sign In
                </Button>

                <Text color={"white"} textAlign={"center"} mt={2}>
                  <Link to={"/resetpassword"}>Reset Password</Link>
                  <Text ml={4} as={"span"} _hover={{ color: "whatsapp.200" }}>
                    <Link to={"/register"}>Sign Up</Link>
                  </Text>
                </Text>
              </FormControl>
            </CardBody>
          </Card>
        </Container>
      </motion.div>
    </Stack>
  );
};

export default Login;
