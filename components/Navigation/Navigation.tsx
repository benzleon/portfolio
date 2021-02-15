import { Box, Button, HStack, Link, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { HeaderLogic } from "./NavigationLogic";

type NavButtonProps = { children?: ReactNode };

const NavButton = ({ children }: NavButtonProps) => {
  return (
    <Link fontSize="lg" fontWeight="bold" _hover={{ color: "green.400" }}>
      {children}
    </Link>
  );
};

export const Header = () => {
  const { colorMode, toggleColorMode, backgroundColor } = HeaderLogic();

  return (
    <Box pos="fixed" left={0} top={0} w="100%" bg={backgroundColor}>
      <HStack d="flex" float="right" m={2} spacing={8}>
        <NavButton>Home</NavButton>
        <NavButton>Über mich</NavButton>
        <NavButton>Projekte</NavButton>
        <NavButton>Kontakt</NavButton>
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? "Light" : "Dark"} mode
        </Button>
      </HStack>
    </Box>
  );
};
