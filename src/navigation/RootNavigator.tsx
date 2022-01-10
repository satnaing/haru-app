import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppHeader from "../components/AppHeader";
import CartScreen from "../screens/CartScreen";
import ItemScreen from "../screens/ItemScreen";
import BottomTabNavigator from "./BottomNavigator";

const Stack = createNativeStackNavigator();

type NavProps = {
  navigation: NavigationProp<ParamListBase>;
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
        name="Cart"
        component={CartScreen}
        options={{
          header: () => AppHeader({ title: "Cart" }),
        }}
      />
      <Stack.Screen
        name="Item"
        component={ItemScreen}
        options={({ navigation }: NavProps) => ({
          header: () =>
            AppHeader({
              navScreen: "Cart",
              iconName: "shopping-bag",
              navigation,
            }),
        })}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
