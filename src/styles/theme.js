import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#1746A2",
    200: "#FF731D",
    300: "#D95200",
    400: "#1D34FFCF",
    500: "#2737C6"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;