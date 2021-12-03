import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box, HStack, Text } from "@chakra-ui/layout";
import React from "react";

export default function FAQCard() {
  return (
    <AccordionItem
      border="none"
      mb="30px"
      rounded="md"
      bg="rgba(231, 235, 238, 0.05)"
      textAlign="left"
      fontSize="18px"
    >
      {({ isExpanded }) => (
        <>
          <AccordionButton p="30px">
            <HStack spacing="30px">
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
              <Text fontSize="18px">Section 2 title</Text>
            </HStack>
          </AccordionButton>
          <AccordionPanel fontSize="18px" pb="30px" pl="85px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

const AddIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="14" width="30" height="3" rx="1.5" fill="#42F489" />
    <rect
      x="16"
      width="30"
      height="3"
      rx="1.5"
      transform="rotate(90 16 0)"
      fill="#42F489"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="24"
    height="3"
    viewBox="0 0 30 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect opacity="0.8" width="30" height="3" rx="1.5" fill="#857FF6" />
  </svg>
);
