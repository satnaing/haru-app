import { Box, Icon, Input, Pressable } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";

type Props = {
  // children: React.ReactNode;
};

const SearchInput: React.FC<Props> = () => {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Input
        w={{
          base: "82%",
          // md: "25%",
        }}
        _focus={{ borderColor: "light.300" }}
        borderRadius={0}
        py={2}
        size="xl"
        InputLeftElement={
          <Icon
            as={<Feather name="search" />}
            size={6}
            ml="2"
            color="light.300"
          />
        }
        placeholder="Search anything ..."
      />
      <Pressable
        p={3}
        bg="light.500"
        _pressed={{ bg: "light.400" }}
        onPress={() => console.log("Pressed")}
      >
        <Icon as={<Feather name="sliders" />} size="7" color="light.100" />
      </Pressable>
    </Box>
  );
};

export default SearchInput;
