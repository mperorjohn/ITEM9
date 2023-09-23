import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import {
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

const CartPage = () => {
  const { items, removeFromCart } = useContext(CartContext);

  return (
    <Stack>
      <Heading
        textAlign={"center"}
        size={"xl"}
        color={items.length < 1 ? "white" : "orange.200"}
      >
        {items < 1 ? "Your Cart is empty" : "Your cart "}
      </Heading>
      <SimpleGrid
        gap={8}
        templateColumns={"repeat(auto-fill, minmax(250px, 8fr))"}
        position={"relative"}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
        overflowX={"hidden"}
        p={20}
      >
        {items.map((item, index) => (
          <Card
          overflowX={'hidden'}
            key={index}
            _hover={{
              bg: "orange.300",
              color: "white !important",
              transition: "0.5s",
            }}
          >
            <CardBody>
              <Image
                src={item.FoodImage}
                borderRadius={"lg"}
                boxSize="50px"
                objectFit="cover"
              />
            </CardBody>
            <Stack mt={2}>
              <Heading as={"h2"} fontSize={"2xl"} size={"sm"} ml={4}>
                {item.FoodName}
              </Heading>

              <Text
                ml={4}
                fontWeight={"bold"}
                fontSize={"2xl"}
                color={"whatsapp.200"}
              >
                ${item.FoodPrice}
              </Text>
            </Stack>
            <Divider color={"whatsapp.200"} size={4} />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="ghost"
                  color={"whatsapp.200"}
                  onClick={removeFromCart}
                >
                  Remove
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default CartPage;
