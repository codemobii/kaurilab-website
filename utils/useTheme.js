import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  fonts: {
    heading: "'Quicksand', sans-serif",
    body: "'Quicksand', sans-serif",
  },
  initialColorMode: "dark",
  useSystemColorMode: false,
});

export default Theme;
