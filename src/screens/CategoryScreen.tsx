import React from "react";
import { Box, Button, FlatList } from "native-base";
import { StyleSheet } from "react-native";
import CategoryFilter from "../components/CategoryFilter";
import { newItems } from "../data/items";
import ItemCard from "../components/ItemCard";

const CategoryScreen = () => {
  return (
    <Box flex={1} bg="light.100" pb={2}>
      <CategoryFilter />
      <Items />
    </Box>
  );
};

const Items = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      mx={4}
      key={"#"}
      // horizontal
      data={newItems}
      renderItem={({ item }) => (
        <ItemCard
          id={item.id}
          image={item.image1}
          name={item.name}
          price={item.price}
          twoColumn
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default CategoryScreen;
