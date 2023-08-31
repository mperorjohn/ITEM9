import {
  Box,
  Card,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import Login from "../pages/Login";

const NavBar = () => {
  return (
    <Stack>
      <Flex>
        <Box color={"AppWorkspace"} ml={"20"} mt={4}>
          <Heading size={"2xl"} justifyContent={"center"}>
            ITEM
            <Text as={"span"} color={"orange.300"}>
              9
            </Text>
          </Heading>
        </Box>
        <Spacer />
        <Box mt={4} mr={20}>
          <UnorderedList display={"flex"} gap={4} flexDirection={"row"}>
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
