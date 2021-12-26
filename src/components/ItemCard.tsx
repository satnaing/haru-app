import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  Pressable,
} from "native-base";
import { TouchableOpacity } from "react-native";

type Props = {
  name: string;
  price: string;
  image: string;
};

const ItemCard: React.FC<Props> = ({ name, price, image }) => {
  const img = { uri: image };
  return (
    <Pressable
      mx={4}
      _pressed={{ opacity: "0.7" }}
      onPress={() => console.log(name)}
    >
      {/* <TouchableOpacity onPress={() => console.log("HAHA")}> */}
      <Box
        width="200px"
        rounded="none"
        overflow="hidden"
        // borderColor="coolGray.200"
        // borderWidth="1"
        _dark={
          {
            // borderColor: "coolGray.600",
            // backgroundColor: "gray.700",
          }
        }
        _light={
          {
            // backgroundColor: "gray.50",
          }
        }
      >
        <Box>
          <AspectRatio w="100%" ratio={0.74 / 1}>
            <Image source={img} alt="image" />
          </AspectRatio>
        </Box>
        <Stack>
          <Heading mt={1} fontSize="xs">
            {name}
          </Heading>
          <Text fontSize="md">$ {price}</Text>
        </Stack>
      </Box>
      {/* </TouchableOpacity> */}
    </Pressable>
  );
};

export default ItemCard;
