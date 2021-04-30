import { Box, Button, HStack, Link } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { NavigationLogic } from "./NavigationLogic";
import { Link as ScrollLink } from "react-scroll";

type NavButtonProps = { children?: ReactNode; to: string };

const NavButton = ({ children, to }: NavButtonProps) => {
  return (
    <Link
      as={ScrollLink}
      to={to}
      smooth
      fontSize="lg"
      fontWeight="bold"
      _hover={{ color: "green.400" }}
    >
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
            <NavButton to="hero">Home</NavButton>
            <NavButton to="about">Über mich</NavButton>
            <NavButton to="projects">Projekte</NavButton>
            {/* <NavButton>Kontakt</NavButton> */}
            <Button onClick={toggleColorMode}>
              {colorMode === "dark" ? "Light" : "Dark"} mode
            </Button>
          </HStack>
        </Box>
      </Box>
    );
};
