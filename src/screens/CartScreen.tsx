import React from "react";
import { Box, Button } from "native-base";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

type Param = {
  id?: string | undefined;
};

export default function CartScreen() {
  return (
    <Box style={styles.container} safeArea>
      Haru Fashion
      <Button
        _pressed={{ background: "light.400" }}
        background="light.500"
        _text={{ color: "light.100" }}
      >
        CartScreen
      </Button>
      {/* <Button colorScheme="dark">Hello World</Button> */}
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
