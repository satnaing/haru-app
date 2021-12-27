import React from "react";
import { Box, Button, Heading, Image, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { items, newItems } from "../data/items";

const allItems = [...items, ...newItems];

export default function ItemScreen() {
  const route = useRoute();
  const { id }: any = route.params;
  return (
    // <Box style={styles.container} safeArea>
    <Box>
      <Box h="600px">
        <Image
          source={{ uri: allItems[0].image1 }}
          size="full"
          resizeMode="cover"
          alt="Juz Kidding"
        />
      </Box>
      <Box p="4" pt="2">
        <Heading fontSize="lg">{allItems[0].name}</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur hdjkldf jd adipiscing elit.
          Sed volutpat, dui at laoreet cursus, nibh velit hendrerit libero,{" "}
        </Text>
      </Box>
    </Box>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ddd",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
