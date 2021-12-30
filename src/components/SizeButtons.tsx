import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Pressable,
  Spacer,
  Text,
} from "native-base";

const SizeButtons = () => {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <SizeButton>S</SizeButton>
      <Spacer mx="2" />
      <SizeButton>M</SizeButton>
      <Spacer mx="2" />
      <SizeButton>L</SizeButton>
    </Box>
  );
};

type SizeProps = {
  children: React.ReactNode;
};

const SizeButton: React.FC<SizeProps> = ({ children }) => {
  return (
    <Button
      background="light.100"
      _pressed={{ bg: "light.200" }}
      _text={{ color: "light.300" }}
      width="12"
      height="12"
      borderWidth="1"
      borderColor="light.300"
    >
      {children}
    </Button>
  );
};

export default SizeButtons;
