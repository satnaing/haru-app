import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Test from "../screens/Test";
import { Feather } from "@expo/vector-icons";
import ItemScreen from "../screens/ItemScreen";
import CartScreen from "../screens/CartScreen";
import AppHeader from "../components/AppHeader";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Item"
        component={ItemScreen}
        options={{
          header: () =>
            AppHeader({
              navScreen: "Cart",
              iconName: "shopping-bag",
            }),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: () => AppHeader({ title: "Cart" }),
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Categories") {
            iconName = "grid";
          } else if (route.name === "Wishlist") {
            iconName = "heart";
          } else if (route.name === "Cart") {
            iconName = "shopping-bag";
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <BottomTab.Screen name="Categories" component={Test} />
      <BottomTab.Screen name="Wishlist" component={Test} />
      <BottomTab.Screen name="Test" component={Test} />
      <BottomTab.Screen name="Profile" component={Test} />
    </BottomTab.Navigator>
  );
};

export default Navigation;
