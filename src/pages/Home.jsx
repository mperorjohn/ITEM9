import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Image,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  const foodItems = [
    {
      FoodName: "Spaghetti Carbonara",
      FoodPrice: 12.99,
      FoodImage:
        "https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Chicken Teriyaki",
      FoodPrice: 8.49,
      FoodImage:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Margherita Pizza",
      FoodPrice: 10.95,
      FoodImage:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Caesar Salad",
      FoodPrice: 6.75,
      FoodImage:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Beef Burger",
      FoodPrice: 9.99,
      FoodImage:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Sushi Roll Combo",
      FoodPrice: 15.25,
      FoodImage:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Vegan Pad Thai",
      FoodPrice: 11.5,
      FoodImage:
        "https://media.istockphoto.com/id/1456403368/photo/fresh-healthy-organic-vegetables-background.webp?b=1&s=170667a&w=0&k=20&c=5bBCDNq3XnwxX448YI9bNL9JtzbNKNhJYyyeF7l3joY=",
    },
    {
      FoodName: "Chocolate Lava Cake",
      FoodPrice: 5.95,
      FoodImage:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Greek Gyro",
      FoodPrice: 7.8,
      FoodImage:
        "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Mango Tango Smoothie",
      FoodPrice: 4.25,
      FoodImage:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Steak and Potatoes",
      FoodPrice: 18.75,
      FoodImage:
        "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Caprese Salad",
      FoodPrice: 7.25,
      FoodImage:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Shrimp Scampi Pasta",
      FoodPrice: 14.5,
      FoodImage:
        "https://plus.unsplash.com/premium_photo-1676234917179-a7b1ca98c984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Vegetable Stir-Fry",
      FoodPrice: 29.95,
      FoodImage:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: "Vegetable Stir-Fry",
      FoodPrice: 19.95,
      FoodImage:
        "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      FoodName: " Stir-Fry",
      FoodPrice: 9.95,
      FoodImage:
        "https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <Stack color={"white"} p={6} overflowX={"hidden"}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 4 }}>
        <SimpleGrid
          gap={8}
          templateColumns={"repeat(auto-fill, minmax(250px, 4fr))"}
          // bg={'black'}
          position={"relative"}
          // bottom={0}
          justifyContent={{ base: "center" }}
          alignItems={{ base: "center" }}
          overflow={"hidden"}
        >
          {foodItems.map((foodItems, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 2 }}
              transition={{ type: "tween", delay: 0.2 }}
              // whileHover={{ bg: 1.1 }}
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
                  {/* <Text ml={4} mt={2}>
                {generateRandomThreeWordDescription()}
              </Text> */}
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
                    <Button
                      variant="solid"
                      color={"white"}
                      bg={"whatsapp.200"}
                      _hover={{ bg: "whatsapp" }}
                      outline={"none"}
                      outlineColor={"none"}
                    >
                      Buy now
                    </Button>
                    <Button variant="ghost" color={"whatsapp.200"}>
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
