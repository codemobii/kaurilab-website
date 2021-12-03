import { Button as ButtonBox } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import React from "react";
import Colors from "../utils/useColor";

export default function Button({
  children,
  onClick = () => {},
  loading = false,
  link = false,
  isSubmit = false,
  size = "md",
  disabled = false,
  full = false,
  h = null,
  rounded = "sm",
}) {
  return link ? (
    <Link href={link.toString()} style={{ width: full && "100%" }}>
      <ButtonBox
        fontSize={"sm"}
        fontWeight={"500"}
        color="#000"
        bg={Colors.primary}
        _hover={{
          bg: Colors.primary,
        }}
        _active={{
          bg: Colors.primary,
        }}
        rounded={rounded}
        size={size}
        disabled={disabled}
        w={full && "100%"}
      >
        {children}
      </ButtonBox>
    </Link>
  ) : (
    <ButtonBox
      h={h && h}
      fontSize={"xs"}
      fontWeight={"600"}
      colorScheme="green"
      color="#fff"
      borderColor={Colors.primary}
      borderWidth="2px"
      variant="outline"
      rounded={rounded}
      size={size}
      as="button"
      onClick={onClick}
      isLoading={loading}
      loadingText="Please wait . . ."
      type={isSubmit ? "submit" : "button"}
      disabled={disabled}
      w={full && "100%"}
      textTransform="uppercase"
    >
      {children}
    </ButtonBox>
  );
}
