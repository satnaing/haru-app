import React from "react";
import { Box, Button } from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Test() {
  const navigation = useNavigation();
  return (
    <Box style={styles.container} safeArea>
      Haru Fashion
      <Button
        _pressed={{ background: "light.400" }}
        background="light.500"
        _text={{ color: "light.100" }}
        onPress={() => navigation.goBack()}
      >
        HoeHoe
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
