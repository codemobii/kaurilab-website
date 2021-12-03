import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import React from "react";

export default function FeatureCard({ title = "", image = "", desc = "" }) {
  return (
    <Stack
      p="20px"
      rounded="md"
      bg="rgba(255, 255, 255, 0.02)"
      border="1px solid rgba(255, 255, 255, 0.05)"
      textAlign="left"
      h="280px"
      spacing="20px"
    >
      <Box>
        <Image
          src={image}
          alt="Kauri Feature Image"
          w="60px"
          objectFit="contain"
        />
      </Box>
      <Text color="#fff">{title}</Text>
      <Text fontSize="15px">{desc}</Text>
    </Stack>
  );
}
