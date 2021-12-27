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
import { CommonActions, useNavigation } from "@react-navigation/native";

type Props = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const ItemCard: React.FC<Props> = ({ id, name, price, image }) => {
  const navigation = useNavigation();
  const img = { uri: image };
  return (
    <Pressable
      mx={4}
      _pressed={{ opacity: "0.7" }}
      onPress={() =>
        navigation.dispatch(
          CommonActions.navigate({
            name: "Item",
            params: { id },
          })
        )
      }
    >
      <Box width="200px" rounded="none" overflow="hidden">
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
    </Pressable>
  );
};

export default ItemCard;
