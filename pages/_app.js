import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layouts/Index";
import Theme from "../utils/useTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
