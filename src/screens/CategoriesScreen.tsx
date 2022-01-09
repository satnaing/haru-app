import React from "react";
import { Box, Image, Pressable, ScrollView, Text } from "native-base";

const categories = [
  {
    name: "Women",
    uri: "https://i.ibb.co/64s9SFY/Pinky-Oversized-Check-Overshirt-img2-removebg-preview-1.png",
  },
  {
    name: "Men",
    uri: "https://i.ibb.co/ynrCW4z/Quilted-Bomber-Jacket-img2-removebg-preview-1.png",
  },
  {
    name: "Bags",
    uri: "https://i.ibb.co/5LKpf01/1583803526f9c315308d63a039d07520f8672eb4e4-thumbnail-900x-webp-900-1198-removebg-preview-1.png",
  },
  {
    name: "Accessories",
    uri: "https://i.ibb.co/7SGV7Zm/158623804288d47896bc1c5732c511c6f9fd3cf382-thumbnail-900x-webp-900-1198-removebg-preview-1.png",
  },
];

const CategoriesScreen = () => {
  return (
    <ScrollView flex="1" backgroundColor="light.100">
      {categories.map((category) => (
        <Category key={category.name} name={category.name} uri={category.uri} />
      ))}
    </ScrollView>
  );
};

type Props = {
  name: string;
  uri: string;
};

const Category: React.FC<Props> = ({ name, uri }) => {
  return (
    <Pressable
      backgroundColor="light.200"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      m="4"
      height="180px"
    >
      <Text fontSize="3xl">{name}</Text>
      <Image
        mt="5"
        resizeMode="cover"
        source={{ uri }}
        alt="Alternate Text"
        size="40"
      />
    </Pressable>
  );
};

export default CategoriesScreen;
