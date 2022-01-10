import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import AppHeader from "../components/AppHeader";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";

type NavProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Stack = createNativeStackNavigator();

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
        options={({
          route,
          navigation,
        }: {
          route: any;
          navigation: NavProps;
        }) => ({
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

export default CategoryNavigator;
