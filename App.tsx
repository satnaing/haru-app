import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import theme from "./src/config/theme";
import HomeScreen from "./src/screens/HomeScreen";
import Test from "./src/screens/Test";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
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
          <Tab.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Tab.Screen name="Categories" component={Test} />
          <Tab.Screen name="Wishlist" component={Test} />
          <Tab.Screen name="Cart" component={Test} />
          <Tab.Screen name="Profile" component={Test} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

{
  /* <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator> */
}
