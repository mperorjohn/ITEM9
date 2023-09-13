import React from "react";
import {
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Container,
  Card,
  CardFooter,
  CardBody,
  CardHeader,
  Text,
  OrderedList,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import { useDisclosure } from "@chakra-ui/react";

const ResetPassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Container justifyContent={"center"} alignItems={"center"}>
        <Card bg={"whatsapp.200"}>
          <CardHeader>
            <Text fontSize={"4xl"} fontWeight={"bold"} color={"white"}>
              Reset Password
            </Text>
          </CardHeader>
          <CardBody>
            <Text fontWeight={"bold"} color={"red.300"}>
              ⚠ Dear User,
            </Text>
            <Text mt={4} fontWeight={"bold"}>
              Before you proceed to reset your password, please take note of the
              following:
            </Text>
            <Text mt={4}>
              <OrderedList>
                <ListItem>
                  Resetting your password will clear your shopping cart.
                </ListItem>
                <ListItem>
                  Any cookies stored in your browser will be deleted.
                </ListItem>
              </OrderedList>
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              onClick={onOpen}
              outline={"none"}
              border={"none"}
              _hover={{ border: "none", outline: "none" }}
              color={"whatsapp.200"}
              bg={"white"}
            >
              Reset
            </Button>
            <Button
              ml={4}
              outline={"none"}
              border={"none"}
              _hover={{ border: "none", outline: "none" }}
              color={"whatsapp.200"}
              bg={"white"}
              ref={finalRef}
            >
              <Link to={"/login"}>Sign In</Link>
            </Button>
          </CardFooter>
        </Card>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size={"xl"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Heading textAlign={"center"} color={"whatsapp.200"}>
                Reset Password
              </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                // colorScheme="blue"
                mr={3}
                outline={"none"}
                border={"none"}
                _hover={{ border: "none", outline: "none" }}
                color={"white"}
                bg={"whatsapp.200"}
              >
                Reset
              </Button>
              <Button
                onClick={onClose}
                outline={"none"}
                border={"none"}
                _hover={{ border: "none", outline: "none" }}
                color={"white"}
                bg={"whatsapp.200"}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default ResetPassword;
