import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
// import React from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../CartContext";

const NavBar = () => {
  const { items } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      borderBottom={"blur"}
      fontFamily={"'Montserrat', sans-serif"}
      fontWeight={"600"}
    >
      <Flex>
        <Box color={"AppWorkspace"} ml={"20"} mt={4}>
          <Heading
            size={"2xl"}
            justifyContent={"center"}
            fontFamily={"'Montserrat', sans-serif"}
            fontWeight={"600"}
          >
            ITEM
            <Text as={"span"} color={"orange.300"}>
              9
            </Text>
          </Heading>
        </Box>
        <Spacer />
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            // icon={isOpen ? <CloseICon /> : <HambugerIcon />}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>
        <Box mt={4} mr={20}>
          <UnorderedList display={"flex"} gap={4} flexDirection={"row"}>
            <Link to={"cart"}>
              <ListItem
                listStyleType={"none"}
                p={2}
                color={"white"}
                display={"flex"}
              >
                <FaShoppingCart size={"24"} />
                <Badge 
                  borderRadius={"md"}
                  variant={"solid"}
                  colorScheme={items.length < 1 ? "red" : "whatsapp"}
                  ml={1}
                >
                  {items.length < 1 ? "empty" : items.length}
                </Badge>
              </ListItem>
            </Link>
            <Link to={"/"}>
              <ListItem listStyleType={"none"} p={2} color={"white"}>
                Home
              </ListItem>
            </Link>
            <Link to={"login"}>
              <ListItem listStyleType={"none"} p={2} color={"white"}>
                Sign In
              </ListItem>
            </Link>
            <Link to={"register"}>
              <ListItem
                listStyleType={"none"}
                bg={"whatsapp.200"}
                p={{ base: 0, md: 2 }}
                borderRadius={4}
                color={"white"}
              >
                Sign Up
              </ListItem>
            </Link>
          </UnorderedList>
        </Box>
      </Flex>
    </Stack>
  );
};

export default NavBar;
