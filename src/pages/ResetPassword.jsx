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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

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
            <Text fontSize={'4xl'} fontWeight={'bold'} color={'white'}>Reset Password</Text>
          </CardHeader>
          <CardBody>
            <Text fontWeight={"bold"}>⚠ Dear User,</Text>
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
            <Button onClick={onOpen}>Reset</Button>
            <Button ml={4} ref={finalRef}>
              Sign In
            </Button>
          </CardFooter>
        </Card>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
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
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default ResetPassword;
