import { NativeBaseProvider } from "native-base";
import Test from "./src/screens/Test";

export default function App() {
  return (
    <NativeBaseProvider>
      <Test />
    </NativeBaseProvider>
  );
}
