import {
  Card,
  CardBody,
  Text,
  Heading,
  SimpleGrid,
  Image,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  LinkOverlay,
} from "@chakra-ui/react";
import { useContext } from "react";
import { motion } from "framer-motion";
import foodData from ".././../data/food-data.json";
import CartContext from "../CartContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Stack
      color={"white"}
      p={6}
      overflowX={"hidden"}
      fontFamily={"'Montserrat', sans-serif"}
      fontWeight={"600"}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 4 }}>
        <SimpleGrid
          gap={8}
          templateColumns={"repeat(auto-fill, minmax(250px, 4fr))"}
          position={"relative"}
          justifyContent={{ base: "center" }}
          alignItems={{ base: "center" }}
          overflow={"hidden"}
        >
          {foodData.map((foodItems, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 2 }}
              transition={{ type: "tween", delay: 0.2 * index }}
            >
              <Card
                overflow={"hidden"}
                key={index}
                _hover={{
                  bg: "orange.300",
                  color: "white !important",
                  transition: "0.5s",
                }}
              >
                <CardBody>
                  <Image
                    src={foodItems.FoodImage}
                    borderRadius={"lg"}
                    boxSize="300px"
                    objectFit="cover"
                  />
                </CardBody>
                <Stack mt={2} spacing={3}>
                  <Heading as={"h2"} fontSize={"2xl"} size={"sm"} ml={4}>
                    {foodItems.FoodName}
                  </Heading>

                  <Text
                    ml={4}
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                    color={"whatsapp.200"}
                  >
                    ${foodItems.FoodPrice}
                  </Text>
                </Stack>
                <Divider color={"whatsapp.200"} size={4} />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Link to={"/checkout"}>
                      <Button
                        variant="solid"
                        color={"white"}
                        bg={"whatsapp.200"}
                        _hover={{ bg: "whatsapp" }}
                        outline={"none"}
                        outlineColor={"none"}
                        onClick={() =>
                          addToCart(
                            foodItems.FoodName,
                            foodItems.FoodPrice,
                            foodItems.FoodImage
                          )
                        }
                      >
                        Buy now
                      </Button>
                    </Link>

                    <Button
                      variant="ghost"
                      color={"whatsapp.200"}
                      onClick={() =>
                        addToCart(
                          foodItems.FoodName,
                          foodItems.FoodPrice,
                          foodItems.FoodImage
                        )
                      }
                    >
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </motion.div>
    </Stack>
  );
};

export default Home;
