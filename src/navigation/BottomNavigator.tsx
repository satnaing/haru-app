import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import WishlistScreen from "../screens/WishlistScreen";
import ProfileNavigator from "./ProfileNavigator";
import AppHeader from "../components/AppHeader";
import CategoryNavigator from "./CategoryNavigator";

type NavProps = {
  navigation: NavigationProp<ParamListBase>;
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
      <BottomTab.Screen
        name="Categories"
        component={CategoryNavigator}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={({ navigation }: NavProps) => ({
          header: () =>
            AppHeader({
              title: "Wishlist",
              navigation,
            }),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
