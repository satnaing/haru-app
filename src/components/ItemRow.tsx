import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Factory,
} from "native-base";
import ItemCard from "./ItemCard";
// import { items } from "../data/items";

// const items: {
//   id: string;
//   name: string;
//   price: string;
//   description: string;
//   image1: string;
//   image2: string;
//   categoryId: string;
// }[]
type Items = {
  id: string;
  name: string;
  price: string;
  description: string;
  image1: string;
  image2: string;
  categoryId: string;
}[];

type Props = {
  title: string;
  items: Items;
};

const ItemRow: React.FC<Props> = ({ title, items }) => {
  const FactoryScrollView = Factory(ScrollView);
  return (
    <Box mb="4">
      <HStack ml={4} justifyContent="space-between" alignItems="baseline">
        <Heading fontSize="lg">{title}</Heading>
        <Pressable p={4} pt={2} _pressed={{ opacity: 0.5 }}>
          <Text color="light.300">See all</Text>
        </Pressable>
      </HStack>
      <FactoryScrollView
        ml={0}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image1}
          />
        ))}
      </FactoryScrollView>
    </Box>
  );
};

export default ItemRow;
