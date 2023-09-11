import {
  Card,
  SimpleGrid,
  Stack,
  Text,
  Image,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack
      bg={"transparent"}
      height={6}
      justify={"center"}
      p={6}
      overflow={"hidden"}
    >
      <Text color={"white"}>Powered By:</Text>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/800px-Coca-Cola_logo.svg.png"
        width={20}
      />

      <Spacer />
      <Text textAlign={"center"} color={"white"}>
        Copyright © 2019 - All Rights Reserved
      </Text>
    </HStack>
  );
};

export default Footer;
