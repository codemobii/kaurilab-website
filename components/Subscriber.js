import React from "react";
import { Box, VStack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { InputGroup, InputRightElement, Input } from "@chakra-ui/input";
import Colors from "../utils/useColor";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const Subscriber = () => {
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });

  return (
    <Box w="90%" bg={Colors.slight_dark} p="10" rounded="xl">
      <VStack spacing="10">
        <Text
          maxW="550px"
          fontSize="40px"
          fontWeight="bold"
          color={Colors.white}
          align="center"
        >
          STAY IN THE KNOW
        </Text>
        <Text
          maxW="800px"
          fontSize="19px"
          color={Colors.white}
          textAlign="center"
        >
          be the first to know about upcoming swaps, new features, whitelists
          and more
        </Text>

        <Box rounded="full" bg={Colors.white} w="90%">
          <InputGroup size="md" rounded="lg">
            <Input
              placeholder="mysite"
              color={Colors.dark}
              alignSelf="center"
              ml={5}
              fontWeight="bold"
              borderColor={Colors.transparent}
              focusBorderColor={Colors.transparent}
            />

            <Button
              size="md"
              borderLeftRadius="full"
              borderBottomRightRadius="full"
              p={[5, 6, 6]}
              fontWeight="bold"
              bg={Colors.slight_purple}
              _hover={{ bg: Colors.slight_purple }}
              _active={{ bg: Colors.slight_purple }}
              w="40%"
              fontSize="14px"
            >
              Contact Us
            </Button>
          </InputGroup>
        </Box>
      </VStack>
    </Box>
  );
};

export default Subscriber;
