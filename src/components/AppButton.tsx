import React from "react";
import { Button } from "native-base";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type Props = {
  // navigation: NavigationProp<ParamListBase>;
  size?: "sm" | "md" | "full";
  children: React.ReactNode;
  verticalMargin?: boolean;
  btnWidth?: string;
};

const AppButton: React.FC<Props> = ({
  size = "md",
  verticalMargin = false,
  btnWidth,
  children,
}) => {
  let fontSize;
  let height;
  let width;
  if (size === "full") {
    fontSize = "lg";
    height = "16";
    width = "100%";
  } else if (size === "md") {
    fontSize = "md";
    height = "12";
    width = "60%";
  } else if (size === "sm") {
    fontSize = "sm";
    height = "10";
    width = "30%";
  }
  return (
    <Button
      background="light.500"
      _pressed={{ bg: "light.400" }}
      _text={{ color: "light.100", fontSize }} // fontSize: lg
      height={height} // height: 10 12 16
      width={btnWidth ? btnWidth : width} // width: 30% 60% 80% 100%
      borderColor="light.500"
      alignSelf="center"
      my={verticalMargin ? 6 : 0} // my: {6} null
    >
      {children}
    </Button>
  );
};

{
  /* <Button
        background="light.500"
        _pressed={{ bg: "light.400" }}
        _text={{ color: "light.100" }}
        height="10"
        width="30%"
        borderColor="light.500"
        alignSelf="center"
      >
        Add to Cart
      </Button> */
}

{
  /* <Button
        background="light.500"
        _pressed={{ bg: "light.400" }}
        _text={{ color: "light.100" }}
        height="16"
        width="80%"
        borderColor="light.500"
      >
        Add to Cart
      </Button> */
}

{
  /* <Button
        background="light.500"
        _pressed={{ bg: "light.400" }}
        _text={{ color: "light.100", fontSize: "lg" }}
        height="16"
        width="100%"
        borderColor="light.500"
      >
        Checkout
      </Button> */
}

export default AppButton;
