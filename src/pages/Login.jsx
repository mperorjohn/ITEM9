import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Flex,
  Checkbox,
  // Input,
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
  // FormControl,
  // FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResetModal from "../components/ResetModal";
import { useDisclosure } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  //
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Stack justify={"center"} overflowX={"hidden"}>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered="true"
      >
        <ModalOverlay />
        <ModalContent bg={"whatsapp.200"}>
          <ModalHeader>
            <Heading color={"white"}>Reset Password</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel color={"white"}>Email</FormLabel>
              <Input
                ref={initialRef}
                type="email"
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
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
                  >
                    {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg={"white"} color={"whatsapp.200"} mr={3}>
              Reset
            </Button>
            <Button bg={'white'} color={'whatsapp.200'} onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
          <Card bg={"transparent"}>
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
                  _focus={{ color: "none" }}
                  bg={"whatsapp.200"}
                  color={"white"}
                  type="email"
                  size={"md"}
                  _hover={{ bg: "whatsapp.300", outline: "none" }}
                  onChange={EmailHandler}
                  // fontFamily={"'Montserrat', sans-serif"}
                  // fontWeight={"600"}
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
                    // fontFamily={"'Montserrat', sans-serif"}
                    // fontWeight={"600"}
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
                  <Checkbox
                    colorScheme={"whatsapp.200"}
                    color={"white"}
                    // fontFamily={"'Montserrat', sans-serif"}
                    // fontWeight={"600"}
                    //   defaultChecked
                  >
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
                  <Button
                    bg={"transparent"}
                    color={"white"}
                    onClick={onOpen}
                    _hover={{
                      bg: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    Reset Password
                  </Button>
                  {/* </Link> */}
                  <Text as={"span"} _hover={{ color: "whatsapp.200" }}>
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
