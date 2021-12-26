import React from "react";
import { Box, Button } from "native-base";
import { StyleSheet } from "react-native";

export default function Test() {
  return (
    <Box style={styles.container} safeArea>
      Haru Fashion
      <Button
        _pressed={{ background: "light.400" }}
        background="light.500"
        _text={{ color: "light.100" }}
      >
        HAHA
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
