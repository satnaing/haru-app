import React from "react";
import { Box, Button, Center, Fab, Icon, Spacer } from "native-base";
import { Feather } from "@expo/vector-icons";

const CartWishlistRow = () => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      width="full"
      shadow="9"
      p="4"
      backgroundColor="light.200"
    >
      <Button
        background="light.100"
        _pressed={{ bg: "light.200" }}
        _text={{ color: "light.300" }}
        width="16"
        height="16"
        borderWidth="1"
        borderColor="light.300"
      >
        <Icon as={<Feather name="heart" />} size="6" />
      </Button>
      <Button
        background="light.500"
        _pressed={{ bg: "light.400" }}
        _text={{ color: "light.100" }}
        height="16"
        width="80%"
        borderColor="light.500"
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default CartWishlistRow;
