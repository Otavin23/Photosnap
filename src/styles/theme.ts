import { extendTheme } from "@chakra-ui/react";

const themeChakra = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#fff",
      },
    },
  },

  fonts: {
    heading: `DM Sans, sans-serif`,
    body: `DM Sans, sans-serif`,
  },

  breakpoint: {
    sm: "480px",
    md: "725px",
    lg: "990px",
    xl: "1250px",
  },

  config: { initialColorMode: "light", useSystemColorMode: false },
});

export { themeChakra };
