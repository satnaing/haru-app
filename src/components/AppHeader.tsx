import React from "react";
import { Box, Text, Flex, Icon, Pressable } from "native-base";
import { Feather } from "@expo/vector-icons";
import { CommonActions, useNavigation } from "@react-navigation/native";

type Props = {
  title?: string;
  navScreen?: string;
  iconName?: any;
};

const AppHeader: React.FC<Props> = ({ title, navScreen, iconName }) => {
  const navigation = useNavigation();
  return (
    <Flex
      safeAreaTop
      pl={4}
      pr={2}
      // style={{ height: 80 }}
      h="100px"
      _android={{ h: "80px" }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Icon as={<Feather name="arrow-left" />} size="7" />
      </Pressable>
      {title && (
        <Text fontSize="xl" fontWeight="medium">
          {title}
        </Text>
      )}
      {navScreen ? (
        <Pressable
          // borderRadius={100}
          p={4}
          // _pressed={{ background: "light.200" }}
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: navScreen,
              })
            )
          }
        >
          <Icon as={<Feather name={iconName} />} size="6" />
        </Pressable>
      ) : (
        <Box p={4}></Box>
      )}
    </Flex>
  );
};

export default AppHeader;
