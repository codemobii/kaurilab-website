import { Box, Center, Container, Flex, Link } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Colors from "../utils/useColor";

export default function Navbar() {
  return (
    <Box pos="relative" w="100%" h="auto">
      <Container maxW="container.xl">
        <Flex w="100%" h="150px" align="center" justify="space-between">
          <Logo />

          <HStack spacing="40px">
            <NavLink href="/docs">Docs</NavLink>
            <NavLink href="/ido">Ido</NavLink>

            <Button>Connect Wallet</Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

const NavLink = ({ children, href = "" }) => {
  const router = useRouter();
  return (
    <Center
      as="a"
      pos="relative"
      href={href}
      color={router.pathname.includes(href) ? "#fff" : "#B6B6B6"}
      _hover={{
        textDecoration: "none",
        opacity: 1,
        _before: {
          width: "80%",
        },
        color: "#fff",
      }}
      _before={{
        content: '""',
        pos: "absolute",
        bottom: 0,
        w: router.pathname.includes(href) ? "80%" : "0",
        h: "2px",
        rounded: "full",
        bgGradient: "linear(#26FFF2, #326CFF)",
        transition: "all 0.3s ease",
      }}
      textTransform="uppercase"
    >
      {children}
    </Center>
  );
};
