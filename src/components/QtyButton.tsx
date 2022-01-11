import React from "react";
import { Box, Button, Center, Spacer } from "native-base";

type Props = {
  size?: "sm" | "md";
};

const QtyButton: React.FC<Props> = ({ size = "md" }) => {
  const btnSize = size == "md" ? 12 : 8;
  return (
    <Box flexDirection="row">
      <SizeButton type="add" size={btnSize}>
        -
      </SizeButton>
      <Center
        background="light.100"
        borderWidth="1"
        borderColor="light.300"
        width={btnSize}
        height={btnSize}
        _text={{ color: "light.300" }}
      >
        1
      </Center>
      <SizeButton type="sub" size={btnSize}>
        +
      </SizeButton>
    </Box>
  );
};

type SizeProps = {
  children: React.ReactNode;
  type: "add" | "sub";
  size?: number;
};

const SizeButton: React.FC<SizeProps> = ({ children, type, size }) => {
  const borderLeftWidth = type === "add" ? 1 : 0;
  const borderRightWidth = type === "add" ? 0 : 1;
  const fontSize = size === 12 ? "lg" : "xs";
  return (
    <Button
      background="light.100"
      _pressed={{
        bg: "light.200",
      }}
      _text={{ color: "light.300", fontSize }}
      width={size}
      height={size}
      borderWidth="1"
      borderColor="light.300"
      style={{ borderLeftWidth, borderRightWidth }}
    >
      {children}
    </Button>
  );
};

export default QtyButton;
