import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import ItemScreen from "../screens/ItemScreen";
import CartScreen from "../screens/CartScreen";
import AppHeader from "../components/AppHeader";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import WishlistScreen from "../screens/WishlistScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

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
      {/* <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({ navigation }) => ({
          header: () =>
            AppHeader({
              title: "Categories",
              navScreen: "Cart",
              iconName: "sliders",
              navigation,
            }),
        })}
      /> */}
      <BottomTab.Screen
        name="Categories"
        component={CategoryNavigator}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={({ navigation }) => ({
          header: () =>
            AppHeader({
              title: "Wishlist",
              navigation,
            }),
        })}
      />
      {/* <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation }) => ({
          header: () =>
            AppHeader({
              title: "Cart",
              navigation,
            }),
        })}
      /> */}
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{ headerShown: false }}
        // options={{
        //   headerTransparent: true,
        //   headerTintColor: "white",
        // }}
      />
    </BottomTab.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CategoryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="All Categories"
        component={CategoriesScreen}
        options={({ navigation }) => ({
          header: () =>
            AppHeader({
              title: "Categories",
              navigation,
            }),
        })}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={({ route, navigation }: { route: any; navigation: any }) => ({
          header: () =>
            AppHeader({
              title: route?.params?.name,
              navScreen: "Cart",
              iconName: "shopping-bag",
              navigation,
            }),
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
