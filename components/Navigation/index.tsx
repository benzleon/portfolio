import { Box, Button, HStack, Link } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { NavigationLogic } from "./NavigationLogic";

type NavButtonProps = { children?: ReactNode };

const NavButton = ({ children }: NavButtonProps) => {
  return (
    <Link fontSize="lg" fontWeight="bold" _hover={{ color: "green.400" }}>
      {children}
    </Link>
  );
};

export const Navigation = () => {
  const {
    colorMode,
    toggleColorMode,
    backgroundColor,
    burgerMenu,
  } = NavigationLogic();

  if (burgerMenu) return <Box></Box>;
  // TODO make burger menu
  else
    return (
      <Box
        pos="fixed"
        left={0}
        top={0}
        w="100%"
        bg={backgroundColor}
        zIndex={1000}
      >
        <Box maxW="800px" mx="auto">
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
      </Box>
    );
};
