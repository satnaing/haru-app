import React from "react";
import { Box, Button, Center, Fab, Icon, Spacer } from "native-base";
import { Feather } from "@expo/vector-icons";
import AppButton from "./AppButton";

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
        width="12"
        height="12"
        borderWidth="1"
        borderColor="light.300"
      >
        <Icon as={<Feather name="heart" />} size="6" />
      </Button>
      <AppButton btnWidth="85%">Add to Cart</AppButton>
    </Box>
  );
};

export default CartWishlistRow;
