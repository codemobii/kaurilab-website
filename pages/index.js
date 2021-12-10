import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Button as ButtonBox } from "@chakra-ui/react";
import React from "react";
import FeatureCard from "../components/FeatureCard";
import Colors from "../utils/useColor";
import { BigKauriImage } from "../components/Logo";
import Blub from "../components/Blub";
import Subscriber from "../components/Subscriber";

import {
  heading_one_text,
  heading_two_text,
  body_one_text,
  body_two_text,
} from "../components/Texts";
import Button from "../components/Button";

const Home = () => (
  <Stack spacing="100px" align="center">
    <Stack spacing="40px" textAlign="center" align="center">
      <Stack textAlign="center" align="center">
        <Box color="#fff">
          <Text fontSize="26px">Welcome to</Text>
          <Heading fontSize="80px">KAURI IDO</Heading>
        </Box>
        <Text maxW="550px" fontSize="20px">
          KauriLabs makes launching on Solana easy with a token minting lab, a
          launchpad and a dedicated DEX for all listings
        </Text>
      </Stack>

      <Box w="35%">
        <Button full size="lg">
          Buy Now
        </Button>
      </Box>
    </Stack>

    <Stack align="center" w="100%">
      <Flex justify="space-between" w="100%" flexWrap="wrap">
        <Stack spacing="40px" mb="10px" maxW={{ base: "100%", md: "50%" }}>
          <Stack>
            <Box color="#fff">
              <Heading fontSize={{ base: "48px", md: "48px", lg: "56px" }}>
                What is <br /> Kauri Labs
              </Heading>
            </Box>
            <Text fontSize="20px">
              KauriLabs makes launching on Solana easy with a token minting lab,
              a launchpad and a dedicated DEX for all listings
            </Text>
          </Stack>

          <Box>
            <Button>Read Documentation</Button>
          </Box>
        </Stack>
        <Box d={{ base: "none", md: "block" }} w="200px">
          <BigKauriImage />
        </Box>
      </Flex>
    </Stack>

    <Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} w="100%" spacing="50px">
        <Blub heading_text={heading_one_text} body_text={body_one_text}></Blub>
        <Blub heading_text={heading_two_text} body_text={body_two_text}></Blub>
      </SimpleGrid>
    </Stack>

    <Stack textAlign="center" align="center" w="100%" spacing="40px">
      <Stack color="#fff">
        <Heading fontSize="60px">KAURI ECOSYSTEM</Heading>
        <Text maxW="550px" fontSize="15px" color={Colors.text}>
          a brief note about the Kauri Ecosystem
        </Text>
        <Text maxW="550px" fontSize="30px" fontWeight="bold">
          Features of the Kauri Ecosystem
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
        <Text fontSize={{ base: "60px", md: "60px", lg: "70px" }}>
          OUR ROAD MAP
        </Text>
      </Stack>
      <Box h="250px"></Box>
    </Stack>

    <Stack align="center">
      <Box
        w="85vw"
        maxW="1000px"
        border="1px"
        borderColor={Colors.dark}
        p={5}
        rounded="md"
        align="center"
      >
        <Flex
          color="#fff"
          fontWeight="normal"
          justify="space-between"
          alignContent="center"
          w="100%"
          flexWrap="wrap"
        >
          <Heading fontSize={["35px", "40px"]} alignSelf="center">
            PROCEED TO IDO
          </Heading>
          <Stack alignSelf="center" mt="1" mb="1">
            <ButtonBox
              alignSelf="center"
              bg={Colors.slight_green}
              p={6}
              fontSize="15px"
              color={Colors.white}
            >
              Learn & explore now
            </ButtonBox>
          </Stack>
        </Flex>
      </Box>
    </Stack>

    <Stack align="center">
      <Subscriber></Subscriber>
    </Stack>
  </Stack>
);

export default Home;
