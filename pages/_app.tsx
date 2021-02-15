import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },

  colors: {
    // for color scheme: dark: 200, light: 500
    github: {
      200: "#bbb",
      500: "#111",
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
