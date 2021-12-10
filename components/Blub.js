import React from "react";
import { Stack, Box, Text, Heading } from "@chakra-ui/layout";
import { MediumKauriImage } from "./Logo";

const Blub = ({ heading_text, body_text }) => (
  <Stack spacing="40px" direction="row">
    <MediumKauriImage />
    <Stack>
      <Box color="#fff">
        <Heading fontSize="40px">{heading_text}</Heading>
      </Box>
      <Text maxW="550px" fontSize="20px">
        {body_text}
      </Text>
    </Stack>
  </Stack>
);

export default Blub;
