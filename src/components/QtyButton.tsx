import React from "react";
import { Box, Button, Center, Spacer } from "native-base";
import { GestureResponderEvent, GestureResponderHandlers } from "react-native";

type Props = {
  size?: "sm" | "md";
  qty?: number;
  handleQtyAdd?: () => void;
  handleQtyRemove?: () => void;
};

const QtyButton: React.FC<Props> = ({
  size = "md",
  qty = 1,
  handleQtyAdd,
  handleQtyRemove,
}) => {
  const btnSize = size == "md" ? 12 : 8;
  return (
    <Box flexDirection="row">
      <SizeButton type="sub" size={btnSize} onPress={handleQtyAdd}>
        +
      </SizeButton>
      <Center
        background="light.100"
        borderWidth="1"
        borderColor="light.300"
        width={btnSize}
        height={btnSize}
        _text={{ color: "light.300" }}
      >
        {qty}
      </Center>
      <SizeButton type="add" size={btnSize} onPress={handleQtyRemove}>
        -
      </SizeButton>
    </Box>
  );
};

type SizeProps = {
  children: React.ReactNode;
  type: "add" | "sub";
  size?: number;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const SizeButton: React.FC<SizeProps> = ({ children, type, size, onPress }) => {
  const borderLeftWidth = type === "add" ? 0 : 1;
  const borderRightWidth = type === "add" ? 1 : 0;
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
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default QtyButton;
