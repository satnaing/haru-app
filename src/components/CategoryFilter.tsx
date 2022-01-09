import {
  Box,
  Button,
  Container,
  Icon,
  IIconProps,
  ScrollView,
} from "native-base";
import React from "react";

type Props = {
  // children: React.ReactNode;
};

type MenuProps = {
  name: string;
  index: number;
};

const categories = [
  { name: "All" },
  { name: "Top" },
  { name: "Bottom" },
  { name: "Dress" },
  { name: "Accessories" },
];

const CategoryMenu: React.FC<MenuProps> = ({ name, index }) => {
  // console.log(index);
  return (
    <Button
      size="md"
      m={2}
      ml={index === 0 ? "4" : "3"}
      // shadow={2}
      background="light.100"
      borderBottomWidth={2}
      borderColor={name == "All" ? "light.500" : "light.100"}
      // borderColor={"light.500"}
      _pressed={{
        background: "light.200",
      }}
      _text={{
        fontWeight: "medium",
        color: name == "All" ? "light.500" : "light.300",
      }}
    >
      {name}
    </Button>
  );
};

const CategoryFilter: React.FC<Props> = () => {
  return (
    <ScrollView
      // bg="lightBlue.300"
      // my={2}
      ml={2}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* <Button>Hello World</Button> */}
      {categories.map((category, index) => (
        <CategoryMenu key={category.name} name={category.name} index={index} />
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;
