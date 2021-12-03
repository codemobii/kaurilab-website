import { Accordion } from "@chakra-ui/accordion";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import FAQCard from "../components/FAQCard";
import FeatureCard from "../components/FeatureCard";
import Colors from "../utils/useColor";

export default function Ido() {
  return (
    <Stack spacing="70px" align="center">
      <Stack textAlign="center" align="center">
        <Box color="#fff">
          <Text fontSize="26px">Welcome to</Text>
          <Heading fontSize="80px">KAURI IDO</Heading>
        </Box>
        <Text maxW="550px" fontSize="20px">
          KauriLabs makes launching on Solana easy with a token minting lab, a
          launchpad and a dedicated DEX for all listngs
        </Text>
      </Stack>

      <Stack w="100%" spacing="15px">
        <Box
          pos="relative"
          w="100%"
          overflow="hidden"
          rounded="md"
          bg="rgba(115, 103, 240, 0.12)"
        >
          <Box w="40%" h="30px" bg="#7367F0" rounded="inherit" />
        </Box>
        <Flex
          color="#fff"
          fontWeight="normal"
          align="center"
          justify="space-between"
          px="15px"
        >
          <Box borderLeft="4px" borderColor={Colors.primary} pl="10px">
            Already Sold <br />
            $1000000
          </Box>
          <Box
            borderRight="4px"
            textAlign="right"
            borderColor={Colors.primary}
            pr="10px"
          >
            Goal <br />
            $1000000
          </Box>
        </Flex>
      </Stack>

      <Stack textAlign="center" spacing="20px" w="800px">
        <Box color="#fff">
          <Text fontSize="26px">Countdown to IDO</Text>
        </Box>

        <SimpleGrid
          overflow="hidden"
          w="100%"
          rounded="md"
          spacing="2px"
          columns={{ base: 2, md: 4 }}
        >
          <Center h="150px" w="100%" bg="#42F489">
            <Box color={Colors.background}>
              <Heading fontSize="60px">24</Heading>
              <Text>DAY</Text>
            </Box>
          </Center>
          <Center h="150px" w="100%" bg="#42F489">
            <Box color={Colors.background}>
              <Heading fontSize="60px">12</Heading>
              <Text>HRS</Text>
            </Box>
          </Center>
          <Center h="150px" w="100%" bg="#42F489">
            <Box color={Colors.background}>
              <Heading fontSize="60px">38</Heading>
              <Text>MIN</Text>
            </Box>
          </Center>
          <Center h="150px" w="100%" bg="#42F489">
            <Box color={Colors.background}>
              <Heading fontSize="60px">45</Heading>
              <Text>SEC</Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Stack>

      <Stack textAlign="center" align="center" w="100%" spacing="40px">
        <Stack color="#fff">
          <Text fontSize="26px">WHAT MAKES KAURI UNIQUE</Text>
          <Text maxW="550px" fontSize="20px">
            Explore sensational features to prepare your best investment in
            cryptocurrency
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} w="100%" spacing="20px">
          <FeatureCard
            title="Manage Portfolio"
            image="/assets/feature-image 1.png"
            desc="Buy and sell popular digital currencies, keep track of them in the one place."
          />
          <FeatureCard
            title="Protected Securely"
            image="/assets/feature-image 2.png"
            desc="All cash balances are covered by FDIC insurance, up to a maximum of $250,000."
          />
          <FeatureCard
            title="Cryptocurrency Variety"
            image="/assets/feature-image 3.png"
            desc="Supports a variety of the most popular digital currencies and always uptodate."
          />
        </SimpleGrid>
      </Stack>

      <Stack textAlign="center" align="center" w="100%" spacing="40px">
        <Stack color="#fff">
          <Text fontSize="26px">FAQ`s</Text>
        </Stack>

        <Accordion w="80%">
          <FAQCard />
          <FAQCard />
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </Accordion>
      </Stack>

      <Text
        bgGradient="linear(#42F489, #857FF6)"
        bgClip="text"
        fontSize="6xl"
        pt="100px"
        fontWeight="extrabold"
      >
        JOIN OUR COMMUNITY
      </Text>
    </Stack>
  );
}
