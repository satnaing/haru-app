import { Box, NativeBaseProvider } from "native-base";
import AppContainer from "./src/components/AppContainer";

import theme from "./src/config/theme";
import Header from "./src/components/Header";
import Test from "./src/screens/Test";
import SearchInput from "./src/components/SearchInput";
import CategoryRow from "./src/components/CategoryRow";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppContainer>
        {/* <Test /> */}
        <Header />
        <SearchInput />
      </AppContainer>
      <Box>
        <CategoryRow />
      </Box>
    </NativeBaseProvider>
  );
}
