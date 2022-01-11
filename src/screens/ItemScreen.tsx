// import React from "react";
import { Box, Button, Heading, Image, ScrollView, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { items, newItems } from "../data/items";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SizeButtons from "../components/SizeButtons";
import QtyButton from "../components/QtyButton";
import CartWishlistRow from "../components/CartWishlistRow";
import { useState } from "react";

const allItems = [...items, ...newItems];

export default function ItemScreen() {
  const route = useRoute();
  const { id }: any = route.params;
  const currentItem = allItems.filter((item) => item.id === id)[0];
  const images = [currentItem.image1, currentItem.image2];

  const [totalPrice, setTotalPrice] = useState(+currentItem.price);
  let [qty, setQty] = useState(1);

  const handleQtyAdd = () => {
    setQty(qty + 1);
    setTotalPrice(totalPrice + +currentItem.price);
  };

  const handleQtyRemove = () => {
    if (+totalPrice.toFixed(2) !== +currentItem.price) {
      setTotalPrice(totalPrice - +currentItem.price);
      setQty(qty - 1);
    }
  };

  return (
    <Box style={{ flex: 1 }}>
      <ScrollView>
        <Box h="600px">
          <SwiperFlatList
            paginationDefaultColor="#888888"
            paginationActiveColor="#282828"
            paginationStyle={{
              alignItems: "center",
            }}
            paginationStyleItem={{
              width: 30,
              height: 10,
              backgroundColor: "yellow",
            }}
            index={0}
            showPagination
            data={images}
            renderItem={({ item }) => (
              <Image
                style={styles.child}
                source={{ uri: item }}
                size="full"
                width="100%"
                resizeMode="cover"
                alt="Juz Kidding"
              />
            )}
          />
        </Box>
        {/* <ZStack> */}
        <Box bg="light.100" p="4" pt="2">
          <Heading fontSize="lg">{allItems[0].name}</Heading>
          <Box flexDirection="row" justifyContent="space-between" my="4">
            <SizeButtons />
            <Box flexDirection="row" alignItems="baseline">
              <Text color="light.400">buy for </Text>
              <Text fontSize="xl" fontWeight="bold">
                $ {currentItem.price}
              </Text>
            </Box>
          </Box>
          <Text>{currentItem.description}</Text>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt="4"
            mb="2"
          >
            <QtyButton
              qty={qty}
              handleQtyAdd={handleQtyAdd}
              handleQtyRemove={handleQtyRemove}
            />
            <Text fontSize="lg" fontWeight="bold">
              Total Price: $ {totalPrice.toFixed(2)}
            </Text>
          </Box>
        </Box>
      </ScrollView>
      <CartWishlistRow />
    </Box>
  );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  child: { width: width, height: "100%", justifyContent: "center" },
});
