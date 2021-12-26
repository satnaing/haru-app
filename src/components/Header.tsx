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
      <Pressable p={4}>
        <Icon as={<Feather name="bell" />} size="7" />
      </Pressable>
    </Flex>
  );
}
