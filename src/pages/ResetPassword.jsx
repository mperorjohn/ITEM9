import React from "react";
import {
  Heading,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Input,
  FormControl,
  FormLabel,
  // ModalFooter,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

const ResetPassword = () => {
  // const { onOpen } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Button onOpen={onOpen}>Open</Button>
      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered="true"
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent bg={"whatsapp.200"}>
          <ModalHeader>
            <Heading color={"white"}>Reset Password</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack>
              <FormControl>
                <FormLabel color={"white"}>Email</FormLabel>
                <Input
                  // ref={initialRef}
                  type="email"
                  placeholder="Enter your email"
                />

                <FormLabel>New Password</FormLabel>
                <Button
                  bg={"white"}
                  type="submit"
                  color={"whatsapp.200"}
                  mr={3}
                  _focus={{ outline: "none", border: "none" }}
                >
                  Reset
                </Button>
                <Button
                  bg={"white"}
                  color={"whatsapp.200"}
                  _focus={{ outline: "none", border: "none" }}
                  onClick={onClose}
                >
                  Cancel
                  <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    isCentered="true"
                    size={{ base: "sm", md: "md" }}
                  >
                    <ModalOverlay />
                    <ModalContent bg={"whatsapp.200"}>
                      <ModalHeader>
                        <Heading color={"white"}>Reset Password</Heading>
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <Stack spacing={4} gap={4}>
                          <FormControl>
                            <FormLabel color={"white"}>Email</FormLabel>
                            <Input
                              // ref={initialRef}
                              type="email"
                              placeholder="Enter your email"
                            />

                            <FormLabel color={"white"}>New Password</FormLabel>
                            <Input
                              // ref={initialRef}
                              type="password"
                              placeholder="Create password"
                            />
                            <FormLabel color={"white"}>
                              Confirm Password
                            </FormLabel>
                            <Input
                              // ref={initialRef}
                              type="password"
                              placeholder="Create password"
                            />
                            <Box mt={10}>
                              <Button
                                bg={"white"}
                                type="submit"
                                color={"whatsapp.200"}
                                mr={3}
                                _focus={{ outline: "none", border: "none" }}
                              >
                                Reset Password
                              </Button>
                              <Button
                                bg={"white"}
                                color={"whatsapp.200"}
                                _focus={{ outline: "none", border: "none" }}
                                onClick={onClose}
                              >
                                Cancel
                              </Button>
                            </Box>
                          </FormControl>
                        </Stack>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Button>
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ResetPassword;
