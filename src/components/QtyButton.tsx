import React from "react";
import { Box, Button, Center, Spacer } from "native-base";

const QtyButton = () => {
  return (
    <Box flexDirection="row" background="lightBlue.100">
      <SizeButton type="add">-</SizeButton>
      {/* <SizeButton>H</SizeButton> */}
      <Center
        background="light.100"
        borderWidth="1"
        borderColor="light.300"
        width="12"
        height="12"
        _text={{ color: "light.300" }}
      >
        1
      </Center>
      <SizeButton type="sub">+</SizeButton>
    </Box>
  );
};

type SizeProps = {
  children: React.ReactNode;
  type: "add" | "sub";
};

const SizeButton: React.FC<SizeProps> = ({ children, type }) => {
  const borderLeftWidth = type === "add" ? 1 : 0;
  const borderRightWidth = type === "add" ? 0 : 1;
  return (
    <Button
      background="light.100"
      _pressed={{
        bg: "light.200",
      }}
      _text={{ color: "light.300" }}
      width="12"
      height="12"
      borderWidth="1"
      borderColor="light.300"
      style={{ borderLeftWidth, borderRightWidth }}
    >
      {children}
    </Button>
  );
};

export default QtyButton;
