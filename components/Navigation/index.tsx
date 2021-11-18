import { Box, Button, HStack, Link } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { NavigationLogic } from "./NavigationLogic";
import { Link as ScrollLink } from "react-scroll";
import { BurgerMenu } from "../BurgerMenu";

type NavButtonProps = {
  children?: ReactNode;
  to: string;
  onClose?: () => void;
};

const NavButton = ({ children, to, onClose }: NavButtonProps) => {
  return (
    <Link
      as={ScrollLink}
      to={to}
      smooth={true}
      fontSize="lg"
      fontWeight="bold"
      onClick={onClose}
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
    isOpen,
    onClose,
    onOpen,
  } = NavigationLogic();

  if (burgerMenu)
    return (
      <BurgerMenu
        color="black"
        backgroundColor="white"
        hoverColor="green.400"
        showThemeToggle={true}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      >
        <NavButton onClose={onClose} to="hero">
          Home
        </NavButton>
        <NavButton onClose={onClose} to="about">
          Über mich
        </NavButton>
        <NavButton onClose={onClose} to="projects">
          Projekte
        </NavButton>
      </BurgerMenu>
    );
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
            <Button onClick={toggleColorMode}>
              {colorMode === "dark" ? "Light" : "Dark"} mode
            </Button>
          </HStack>
        </Box>
      </Box>
    );
};
