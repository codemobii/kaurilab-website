import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/layout";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={"/assets/logo.png"}
        alt="Kauri"
        w="48px"
        objectFit="contain"
      />
    </Link>
  );
}
