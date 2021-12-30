// import React from "react";
import { Box, Heading, Image, ScrollView, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { items, newItems } from "../data/items";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SizeButtons from "../components/SizeButtons";
import QtyButton from "../components/QtyButton";
import CartWishlistRow from "../components/CartWishlistRow";

const allItems = [...items, ...newItems];

const images = [allItems[0].image1, allItems[0].image2];

export default function ItemScreen() {
  const route = useRoute();
  const { id }: any = route.params;
  return (
    <Box style={{ flex: 1 }}>
      <ScrollView>
        <Box h="600px">
          <SwiperFlatList
            paginationDefaultColor="#888888"
            paginationActiveColor="#282828"
            paginationStyle={{
              // left: 0,
              alignItems: "center",
            }}
            paginationStyleItem={{
              // borderRadius: 0,
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
                $ 50.75
              </Text>
            </Box>
          </Box>
          <Text>
            Lorem ipsum dolor sit amet, consectetur hdjkldf jd adipiscing elit.
            Sed volutpat, dui at laoreet cursus, nibh velit hendrerit libero,
          </Text>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt="4"
            mb="2"
          >
            <QtyButton />
            <Text fontSize="lg" fontWeight="bold">
              Total Price: $ 50.75
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
