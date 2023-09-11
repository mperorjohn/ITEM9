import { Card, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Stack bg={"transparent"} height={10} justify={'center'} p={6}>
      <SimpleGrid
        templateColumns={"repeat(auto-fill, minmax(250px, 4fr))"}
      >
        <Card>

        </Card>
      </SimpleGrid>
      <Text textAlign={'center'} color={"white"}>Copyright © 2019 - All Rights Reserved</Text>
    </Stack>
  );
};

export default Footer;
