import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

const LoginScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  return (
    <Box flex={1} bg="light.200" safeArea>
      <Center bg="light.500" height="30%" pt={8}>
        <Image
          style={{ width: "30%", height: "35%" }}
          size="xl"
          resizeMode="cover"
          source={require("../assets/logo.png")}
          alt="Haru Fashion"
        />
      </Center>
      <Heading my={2} alignSelf="center">
        Login
      </Heading>
      <Box mx={4}>
        <Text>Email</Text>
        <Input
          _focus={{ borderColor: "light.300" }}
          mb={4}
          variant="outline"
          placeholder="Enter your email"
        />

        <Text>Password</Text>
        <Input
          _focus={{ borderColor: "light.300" }}
          mb={4}
          variant="outline"
          placeholder="Enter your password"
        />

        <TouchableOpacity>
          <Text color="light.300">Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          background="light.500"
          _pressed={{ bg: "light.400" }}
          _text={{ color: "light.100", fontSize: "md" }}
          height="12"
          width="60%"
          borderColor="light.500"
          alignSelf="center"
          my={6}
        >
          Login
        </Button>
        <HStack alignSelf="center">
          <Text color="light.300">Not a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text>Register Now!</Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </Box>
  );
};

export default LoginScreen;
