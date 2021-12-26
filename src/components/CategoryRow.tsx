import {
  Box,
  Button,
  Container,
  Icon,
  IIconProps,
  ScrollView,
} from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  // children: React.ReactNode;
};

type MenuProps = {
  name: string;
  icon: any;
  index: number;
};

const categories = [
  { name: "Men", icon: "man" },
  { name: "Women", icon: "woman" },
  { name: "Bags", icon: "gift" },
  { name: "Accessories", icon: "wallet" },
];

const CategoryMenu: React.FC<MenuProps> = ({ name, icon, index }) => {
  // console.log(index);
  return (
    <Button
      size="md"
      m={2}
      ml={index === 0 ? "1" : "3"}
      shadow={3}
      background="light.100"
      _pressed={{
        background: "light.200",
      }}
      _text={{
        color: "light.400",
      }}
      leftIcon={
        <Icon
          as={<AntDesign name={icon} />}
          size={5}
          // ml="1"
          color="light.400"
        />
      }
    >
      {name}
    </Button>
  );
};

const CategoryRow: React.FC<Props> = () => {
  return (
    <ScrollView my={2} horizontal showsHorizontalScrollIndicator={false}>
      {/* <Button>Hello World</Button> */}
      {categories.map((category, index) => (
        <CategoryMenu
          key={category.name}
          name={category.name}
          icon={category.icon}
          index={index}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryRow;
