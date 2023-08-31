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
} from "@chakra-ui/react";
import React from "react";

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
      FoodImage: "beef_burger.jpg",
    },
    {
      FoodName: "Sushi Roll Combo",
      FoodPrice: 15.25,
      FoodImage: "sushi_roll_combo.jpg",
    },
    {
      FoodName: "Vegan Pad Thai",
      FoodPrice: 11.5,
      FoodImage: "vegan_pad_thai.jpg",
    },
    {
      FoodName: "Chocolate Lava Cake",
      FoodPrice: 5.95,
      FoodImage: "chocolate_lava_cake.jpg",
    },
    {
      FoodName: "Greek Gyro",
      FoodPrice: 7.8,
      FoodImage: "greek_gyro.jpg",
    },
    {
      FoodName: "Mango Tango Smoothie",
      FoodPrice: 4.25,
      FoodImage: "mango_tango_smoothie.jpg",
    },
    {
      FoodName: "Steak and Potatoes",
      FoodPrice: 18.75,
      FoodImage: "steak_and_potatoes.jpg",
    },
    {
      FoodName: "Caprese Salad",
      FoodPrice: 7.25,
      FoodImage: "caprese_salad.jpg",
    },
    {
      FoodName: "Shrimp Scampi Pasta",
      FoodPrice: 14.5,
      FoodImage: "shrimp_scampi_pasta.jpg",
    },
    {
      FoodName: "Vegetable Stir-Fry",
      FoodPrice: 9.95,
      FoodImage: "vegetable_stir_fry.jpg",
    },
  ];

  const generateRandomThreeWordDescription = () => {
    const adjectives = [
      "Delicious",
      "Savory",
      "Exquisite",
      "Mouthwatering",
      "Flavorful",
      "Tasty",
    ];
    const nouns = [
      "Bite",
      "Dish",
      "Creation",
      "Experience",
      "Delight",
      "Indulgence",
    ];

    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`;
  };

  return (
    <Stack color={"white"} p={10}>
      <SimpleGrid
        gap={8}
        templateColumns={"repeat(auto-fill, minmax(250px, 4fr))"}
        // bg={'black'}
        position={"relative"}
        // bottom={0}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
      >
        {foodItems.map((foodItems, index) => (
          <Card overflow={"hidden"} maxW="sm" key={index}>
            <CardBody>
              <Image src={foodItems.FoodImage} borderRadius={"lg"} height={300} width={600} />
            </CardBody>
            <Stack mt={6} spacing={3}>
              <Heading as={"h2"} fontSize={"2xl"} ml={4}>
                {foodItems.FoodName}
              </Heading>
              <Text ml={4} mt={2}>{generateRandomThreeWordDescription()}</Text>
              <Text ml={4} fontSize={"2xl"} color={"whatsapp.200"}>
                ${foodItems.FoodPrice}
              </Text>
            </Stack>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" color={"white"} bg={"whatsapp.200"}>
                  Buy now
                </Button>
                <Button variant="ghost" color={"whatsapp.200"}>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Home;
