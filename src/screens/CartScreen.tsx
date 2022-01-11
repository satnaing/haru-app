import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Divider,
  FlatList,
  HStack,
  Image,
  Radio,
  Text,
  VStack,
} from "native-base";
import { items, newItems } from "../data/items";
import QtyButton from "../components/QtyButton";
import AppButton from "../components/AppButton";

const combinedItem = [...newItems, ...items];

const CartScreen = () => {
  return (
    <Box flex={1} bg="light.200">
      <FlatList
        m={4}
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
      <BottomStack />
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
      <Box width="20%">
        <AspectRatio w="100%" ratio={0.74 / 1}>
          <Image source={{ uri: img }} alt="image" />
        </AspectRatio>
      </Box>
      <VStack px={2} width="50%" justifyContent="flex-start">
        <Text fontSize="sm" mb={2}>
          {name}
        </Text>
        <Text mb={2}>Size: M</Text>
        <Text fontWeight="bold" fontSize="lg">
          $ {price}
        </Text>
      </VStack>
      <Box width="30%" alignSelf="center">
        <QtyButton size="sm" />
      </Box>
    </HStack>
  );
};

const BottomStack = () => {
  const [value, setValue] = React.useState("one");
  return (
    <VStack
      shadow="8"
      position="absolute"
      width="100%"
      bottom="0"
      background="light.100"
      p={4}
    >
      <HStack justifyContent="space-between">
        <Text>Sub Total</Text>
        <Text>$ 240.34</Text>
      </HStack>
      <Divider my="2" />
      <VStack>
        <Text>Delivery</Text>
        <HStack justifyContent="space-between">
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
          >
            <Radio colorScheme="light" value="one" my={1}>
              Within Yangon
            </Radio>
            <Radio colorScheme="light" value="two" my={1}>
              Other Cities
            </Radio>
          </Radio.Group>
          <VStack justifyContent="space-between" py={3}>
            <Text>$ 2.00</Text>
            <Text>$ 7.00</Text>
          </VStack>
        </HStack>
      </VStack>
      <Divider my="2" />
      <HStack mb={2} justifyContent="space-between">
        <Text fontWeight="bold">Total</Text>
        <Text fontWeight="bold">$ 242.34</Text>
      </HStack>
      <AppButton size="full" verticalMargin>
        Checkout
      </AppButton>
    </VStack>
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

export default CartScreen;
