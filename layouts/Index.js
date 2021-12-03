import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import Colors from "../utils/useColor";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Box
      w="100%"
      pos="relative"
      bg={Colors.background}
      color={Colors.text}
      fontSize="20px"
      fontWeight="medium"
    >
      <Navbar />
      <Container maxW="container.lg" py="150px">
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
