import React from "react";
import { Flex, Heading, Icon, Pressable } from "native-base";
import { Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <Flex
      my={4}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading size="2xl">Haru Fashion</Heading>
      <Pressable
        borderRadius={100}
        p={4}
        _pressed={{ background: "light.200" }}
      >
        <Icon as={<Feather name="bell" />} size="6" />
      </Pressable>
    </Flex>
  );
}
