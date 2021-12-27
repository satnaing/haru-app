import { NativeBaseProvider } from "native-base";

import theme from "./src/config/theme";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      {/* <AppHeader /> */}
      <Navigation />
    </NativeBaseProvider>
  );
}
