import Link from "next/link";
import {
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  useColorMode,
  Icon,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  Box,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";

type BurgerMenuProps = {
  backgroundColor: string;
  color: string;
  hoverColor: string;
  children?: React.ReactNode;
  showThemeToggle?: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const BurgerMenu = ({
  backgroundColor,
  color,
  hoverColor,
  children,
  showThemeToggle,
  isOpen,
  onClose,
  onOpen,
}: BurgerMenuProps) => {
  const btnRef = React.useRef();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        pos="fixed"
        top={0}
        right={0}
        m={4}
        ref={btnRef}
        backgroundColor={backgroundColor}
        onClick={onOpen}
        zIndex={100}
        variant="solid"
        icon={<Icon boxSize={5} as={FaBars} />}
        color={color}
        _focus={{}}
        aria-label="burgermenu"
        _hover={{
          color: hoverColor,
        }}
      ></IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton right="0.75rem" />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <VStack alignItems="baseline">{children}</VStack>
            </DrawerBody>
            {showThemeToggle && (
              <DrawerFooter>
                <Box w="full" h="full">
                  <Text textAlign="center" mb={3}>
                    Theme:
                  </Text>
                  <Button onClick={toggleColorMode} w="full">
                    {colorMode === "light" ? "Light" : "Dark"}
                  </Button>
                </Box>
              </DrawerFooter>
            )}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
