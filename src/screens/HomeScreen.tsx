import { Box, ScrollView } from "native-base";
import AppContainer from "../components/AppContainer";

import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import CategoryRow from "../components/CategoryRow";
import ItemRow from "../components/ItemRow";
import { items, newItems } from "../data/items";

export default function HomeScreen() {
  return (
    <Box bg="light.100" flex={1}>
      <AppContainer>
        <Header />
        <SearchInput />
      </AppContainer>
      <Box>
        <CategoryRow />
      </Box>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ItemRow title="Best Selling" items={items} />
        <ItemRow title="New Arrivals" items={newItems} />
      </ScrollView>
    </Box>
  );
}
