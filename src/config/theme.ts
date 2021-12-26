import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    light: {
      100: "#FFFFFF",
      200: "#F2F2F2",
      300: "#888888",
      400: "#545454",
      500: "#282828",
    },
    dark: {
      100: "#F6F6F6",
      200: "#C2C2C2",
      300: "#2F3641",
      400: "#232528",
    },
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "0",
      },
    },
  },
});

export default theme;
