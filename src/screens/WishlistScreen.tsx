import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  FlatList,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import { items, newItems } from "../data/items";

const combinedItem = [...newItems, ...items];

const WishlistScreen = () => {
  return (
    <Box flex={1} alignItems="center" bg="light.200" m={4}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={localItems}
        renderItem={({ item }) => (
          <WishlistItem
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.image1}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button
        position="absolute"
        bottom="0"
        background="light.100"
        _pressed={{ bg: "light.200" }}
        _text={{ color: "light.300" }}
        width="70%"
        height="12"
        shadow="1"
      >
        Clear Wishlist
      </Button>
    </Box>
  );
};

type WishlistProps = {
  img: string;
  name: string;
  price: string;
};

const WishlistItem: React.FC<WishlistProps> = ({ img, name, price }) => {
  return (
    <HStack background="light.100" mb={4} p={2} justifyContent="space-around">
      <Box width="15%">
        <AspectRatio w="100%" ratio={0.74 / 1}>
          <Image source={{ uri: img }} alt="image" />
        </AspectRatio>
      </Box>
      <VStack px={2} width="55%" justifyContent="flex-start">
        <Text fontSize="sm" mb={2}>
          {name}
        </Text>
        <Text fontWeight="bold">$ {price}</Text>
      </VStack>
      <Button
        background="light.500"
        _pressed={{ bg: "light.400" }}
        _text={{ color: "light.100" }}
        height="10"
        width="30%"
        borderColor="light.500"
        alignSelf="center"
      >
        Add to Cart
      </Button>
    </HStack>
  );
};

const localItems = [
  {
    id: "4",
    name: "Pleated Midi Skirt",
    price: "59.39",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
    image1:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPleatedMidiSkirt-img1.jpg?alt=media&token=a3ad8032-f706-4ad3-87db-0a6d971aafed",
    image2:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FPleatedMidiSkirt-img2.jpg?alt=media&token=77a631ae-e35d-4c25-aace-1b8c9c65d6dd",
    categoryId: "2",
  },
  {
    id: "5",
    name: "Floral Midi Skirt",
    price: "89.99",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora magnam debitis dolor veniam consequatur numquam perferendis cum, ipsam aliquid ipsa?",
    image1:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFloralMidiSkirt-img2.jpg?alt=media&token=986733fa-724c-4236-85cf-bd6154366f7c",
    image2:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-sn.appspot.com/o/items%2FFloralMidiSkirt-img1.jpg?alt=media&token=d82e7c88-95a1-419b-b562-dc6efbcbc787",
    categoryId: "2",
  },
];

export default WishlistScreen;
