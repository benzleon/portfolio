import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
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
