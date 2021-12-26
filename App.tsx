import { NativeBaseProvider } from "native-base";

import theme from "./src/config/theme";
import Test from "./src/screens/Test";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Test />
    </NativeBaseProvider>
  );
}
